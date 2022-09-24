import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import logo from '../../assets/images/logo-github.png'
import {Input, Segment} from 'semantic-ui-react';

const SearchBar =({searchText,onSearchChange, onSearchSubmit}) =>{
    return (
        <div className="search-bar">
        <img className='logo' alt="logo" src={logo}/>

        <Segment size="tiny">
        <form onSubmit={(e)=>{
            e.preventDefault();

            onSearchSubmit();
        }}>
            <Input 
            fluid 
            placeholder="chercher" 
            icon='search' 
            iconPosition="left"
            value ={searchText}
            onChange={(e)=>{
          
                onSearchChange(e.target.value)
            }}
            />
        </form>
        </Segment>
        </div>
    )
}

SearchBar.propTypes ={
    searchText:PropTypes.string.isRequired,
    onSearchChange:PropTypes.func.isRequired,
    onSearchSubmit:PropTypes.func.isRequired,
}

export default SearchBar;