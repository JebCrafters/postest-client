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
import Profile from '../pages/Profile'

function App() {
    const isAuth = useSelector(state => state.user.isAuth) 

    const currentUser = (useSelector(state => state.user.currentUser.email))
    const str_user = String(currentUser)
    const name = str_user.split('@')[0];

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

                      {isAuth &&   <Route path="/registration" element={<Navigate to="/"/>}/> }
                      {isAuth &&   <Route path="/login" element={<Navigate to="/"/>}/> }
                      
                      <Route path="/" element={<Main/>}/>  
                      <Route path="*" element={<Navigate to="/"/>}/>  

                      {!isAuth &&  <Route path="/create-post" element={<Navigate to="/"/>}/> }
                      {isAuth &&  <Route path="/create-post" element={<FormPost/>}/> } 

                      {!isAuth &&  <Route path={`/${name}`} element={<Navigate to="/"/>}/> }
                      {isAuth &&  <Route path={`/${name}`} element={<Profile/>}/> } 

                  </Routes>
              </div>
          </div>
      </BrowserRouter> 
  );
}

export default App;
