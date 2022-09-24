import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Card } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API ='https://api.github.com/repos'

const SingleRepo =() =>{
    const {orga, repo} = useParams();

    const [repository,setRepo] =useState({});

    const [loading, setLoading] =useState(false);


    const fetchRepo =() => {
        setLoading(true);
       axios({
        method:'get',
        url: `${API}/${orga}/${repo}`
       })
       .then ((res) => {

        console.log(res.data);
        setRepo(res.data);
       
       })
       .catch ((err)=>{
   

;       })
    .finally (()=>{
        setLoading(false);
    })
    }

    useEffect(fetchRepo,[orga,repo]);

    if(loading){
        return(
            <div>Recuperation du repo...</div>
        )
    }

if(!repository.owner) {
    return (
        <div>
    Impossible d'afficher
        </div>
    )
}

const{owner, name,description}=repository;

const {login, avatar_url:avatar, repos_url:reposUrl, type }= owner;

    return (

        <div>
        <Card.Group>
            <Card
    image={avatar}
    header={login}
    meta={type}
    description={reposUrl}
 
  />


<Card
    
    header={name}
    
    description={description}
 
  />
  </Card.Group>
        </div>
    )
}


SingleRepo.propTypes = {
    total : PropTypes.number
}

export default SingleRepo;