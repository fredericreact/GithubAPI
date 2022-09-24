import React from "react";
import PropTypes from 'prop-types'
import { Pagination } from "semantic-ui-react";

const Navigation = ({changePage, activePage, totalPages}) =>{
    return (
        <div>


        <Pagination
activaPage={activePage}
onPageChange={(e,pageObject)=>{
    console.log(pageObject);
    changePage(pageObject.activePage);
}}

boundaryRange={0}
siblingRange={1}

totalPages={totalPages}        />

         
        </div>
    )
}

Navigation.propTypes ={
    changePage:PropTypes.func.isRequired,
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
}

export default Navigation;