import React from "react";
import PropTypes from 'prop-types'

const Navigation = ({changePage, activePage}) =>{
    return (
        <div>
            <button
            type="button"
            disabled ={activePage===1}
            onClick={()=>{
                console.log('prev');
                changePage(activePage-1);
            }}
            >
Precedent
            </button>
            <button
            type="button"
            onClick={()=>{
                console.log('suiv');
                changePage(activePage+1);
            }}
            >
Suivant
            </button>
        </div>
    )
}

Navigation.propTypes ={
    changePage:PropTypes.func.isRequired,
    activePage: PropTypes.number.isRequired,
}

export default Navigation;