// == Import npm
import React, {useState, useEffect} from 'react';
import SearchBar from '../SearchBar';
import Message from '../Message'
import ReposResults from '../ReposResults';
import axios from 'axios';
import Navigation from '../Navigation';
import SingleRepo from '../SingleRepo';
import './style.scss';

import {Route} from 'react-router-dom'



const API = 'https://api.github.com/search/repositories?q=';
const FILTERS ='&sort=stars&order=desc';
// == Composant
const App = () => {

  const [results, setResults] = useState({
  items:[],
  searchText: 'react',
  total_count:0,
  });

  const [loading, setLoading] =useState(false);

  const [pagination,setPagination] = useState(
    {
      page: 1,
      per_page: 9,
    }
  )

  const handleSearchChange = (tape)=>{
    setResults(
      
      {...results,
        searchText:tape});
  }

const fetchData =() => {
  const {searchText}=results
  const {page, per_page:perPage} =pagination;

if (searchText.length===0) return; 

  setLoading(true);
axios ({
  url: `${API}${searchText}${FILTERS}&page=${page}&per_page=${perPage}`,
  method:'get',
}
)
.then((res)=>{
setResults({
  ...results,
  ...res.data ,

})
})
.catch((err) =>{
  console.log(err);
})
.finally(()=>{
  setLoading(false);
})
};

  const handleSearchSubmit = ()=>{
    console.log('submit');
    fetchData();
  }


const handlePageChange =(nouvellepage) => {
console.log('navigatoin', nouvellepage)
setPagination({
  ...pagination,
  page:nouvellepage,
})
}


const {items, total_count:total, searchText } = results;
const {page} =pagination;
const totalPages = 100;

useEffect(fetchData, [page]);



return (
 
  <div className='app'>
<Route exact path="/">
<SearchBar 
    searchText={searchText}
    onSearchChange={handleSearchChange}
    onSearchSubmit={handleSearchSubmit}
    loading={loading}
    />
    <Message total={total}/>
    <ReposResults list={items}/>
    <Navigation activePage={page} changePage={handlePageChange} totalPages={totalPages}/>
  
</Route>
    
  <Route path="/repo/:orga/:repo">
    <SingleRepo/>
  </Route>

  </div>
);
}
// == Export
export default App;