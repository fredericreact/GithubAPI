import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import logo from '../../assets/images/logo-github.png'
import {Input, Segment} from 'semantic-ui-react';

const SearchBar =() =>{
    return (
        <div className="search-bar">
        <img className='logo' alt="logo" src={logo}/>

        <Segment size="tiny">
        <form >
            <Input fluid placeholder="chercher" icon='search' iconPosition="left"/>
        </form>
        </Segment>
        </div>
    )
}

export default SearchBar;