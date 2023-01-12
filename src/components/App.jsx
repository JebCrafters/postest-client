import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './App.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Registration from "./authorization/Registration";
import {useDispatch, useSelector } from 'react-redux';
import Login from './authorization/Login';
import {auth} from '../action/user'
import Main from '../pages/Main';
import FormPost from '../components/posts/formPost';

function App() {
    const isAuth = useSelector(state => state.user.isAuth) 
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(auth())
    }, )
  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  <Routes>
                      {!isAuth &&   <Route path="/registration" element={<Registration/>}/> }
                      {!isAuth &&   <Route path="/login" element={<Login/>}/> }

                      {isAuth &&   <Route path="/registration" element={<Main/>}/> }
                      {isAuth &&   <Route path="/login" element={<Main/>}/> }
                      
                      <Route path="/" element={<Main/>}/>  
                      <Route path="*" element={<Navigate to="/" />}/>  
                      {isAuth &&  <Route path="/create-post" element={<FormPost/>}/> } 

                  </Routes>
              </div>
          </div>
      </BrowserRouter> 
  );
}

export default App;
