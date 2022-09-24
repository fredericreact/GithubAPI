import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Message as MessageSemantic} from 'semantic-ui-react'

const Message =({total}) =>{
    const message =total <=1 ? `${total} resultat` : `${total} results`;
    return (

        <MessageSemantic content={`la recherche a donnee ${message}`}/>
    )
}

Message.defaultProps ={
    total:0
}

Message.propTypes = {
    total : PropTypes.number
}

export default Message;