import React from "react";
import {Outlet} from 'react-router-dom';

const Main = () =>{
    return(
        <>
        <h1><Outlet/></h1>
        </>
    )
}
export default Main 