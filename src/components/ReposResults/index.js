import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Card} from 'semantic-ui-react'

const ReposResults =() =>{
    return (
        <Card.Group>
           
           <Card
    image="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
    header='nom repo'
    meta='orga'
    description='descript'
  />
        </Card.Group>
    )
}

export default ReposResults;