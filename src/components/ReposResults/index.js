import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Card} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const ReposResults =({list}) =>{
   
    return (
        <div className="repos-list">
           {
            list.map((repoObject)=> {
            
            const {id, name, description, owner} =repoObject;
            const {login, avatar_url : avatar} =owner;
            
            return (
                <div className="repo-item">
                <Link  to={`/repo/${login}/${name}`}>
                <Card
                fluid
                key={id}
    image={avatar}
    header={name}
    meta={login}
    description={description}
  />
  </Link>
  </div>
            )
            
        })
           }
        
           </div>
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