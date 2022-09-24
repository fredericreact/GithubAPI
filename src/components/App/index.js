// == Import npm
import React, {useState} from 'react';
import SearchBar from '../SearchBar';
import Message from '../Message'
import ReposResults from '../ReposResults';
import axios from 'axios';

import './style.scss';

const API = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {

  const [results, setResults] = useState({
  items:[],
  searchText: "",
  total_count:0,
  });

  const [loading, setLoading] =useState(false);

  const handleSearchChange = (tape)=>{
    setResults(
      
      {...results,
        searchText:tape});
  }

const fetchData =() => {
  setLoading(true);
axios ({
  url: `${API}${results.searchText}`,
  method:'get',
})
.then((res)=>{
console.log(res.data);
setResults({
  ...results,
  ...res.data ,
  searchText:'',
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

const {items, total_count:total, searchText } = results;

return (
 
  <div className='app'>
    <SearchBar 
    searchText={searchText}
    onSearchChange={handleSearchChange}
    onSearchSubmit={handleSearchSubmit}
    loading={loading}
    />
    <Message total={total}/>
    <ReposResults list={items}/>
  </div>
);
}
// == Export
export default App;