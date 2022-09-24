// == Import npm
import React from 'react';
import SearchBar from '../SearchBar';
import Message from '../Message'
import ReposResults from '../ReposResults';
import data from '../../data/repos'

import './style.scss';

const {total_count : total, items } = data;

// == Composant
const App = () => {
  
return (
 
  <div className='app'>
    <SearchBar 
    searchText='tata'
    onSearchChange={(tape)=>{
      console.log(tape);
    }}
    onSearchSubmit={()=>{
      console.log('submit');
    }}
    />
    <Message total={total}/>
    <ReposResults list={items}/>
  </div>
);
}
// == Export
export default App;