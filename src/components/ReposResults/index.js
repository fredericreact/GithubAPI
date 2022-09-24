import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Card} from 'semantic-ui-react'

const ReposResults =({list}) =>{
   
    return (
        <Card.Group>
           {
            list.map((repoObject)=> {
            
            const {id, name, description, owner} =repoObject;
            const {login, avatar_url : avatar} =owner;
            
            return (
                <Card
                key={id}
    image={avatar}
    header={name}
    meta={login}
    description={description}
  />
            )
            
        })
           }
        
        </Card.Group>
    )
}


ReposResults.propTypes ={
    list:PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string.isRequired,
            description:PropTypes.string,
            id: PropTypes.number.isRequired,
          owner: PropTypes.shape({
            login:PropTypes.string.isRequired,
            avatar_url: PropTypes.string.isRequired,
          }).isRequired  
        })
    ).isRequired
}

export default ReposResults;