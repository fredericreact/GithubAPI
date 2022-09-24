// == Import npm
import React from 'react';
import SearchBar from '../SearchBar';
import Message from '../Message'
import ReposResults from '../ReposResults';


import './style.scss';
// == Composant
const App = () => (
  <div className='app'>
    <SearchBar/>
    <Message/>
    <ReposResults/>
  </div>
);

// == Export
export default App;