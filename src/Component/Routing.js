import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
 const Routing = () =>{
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                  <Route path='/' element={<Main/>}/>
                   <Route index element={<Home/>}/>
                   <Route path='home' element={<Home/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
 }
 export default Routing