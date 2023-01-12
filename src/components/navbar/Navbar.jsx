import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import "./navbar.css";
import Logo from "../../assets/img/logo-navbar.png"
import { NavLink } from 'react-router-dom';
import {auth} from '../../action/user'


const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth) 
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(auth())
    }, )
    const currentUser = (useSelector(state => state.user.currentUser.email))
    const str_user = String(currentUser)
    const name = str_user.split('@')[0];
    return (
        <div className="navbar">
            <div className="container">
                <NavLink to="/main"> <img src={Logo} alt = {""}  className="navbar__logo"/> </NavLink>
                {!isAuth &&  <div className="navbar__register"><NavLink to="/registration">  Registration </NavLink> </div> }
                {!isAuth &&  <div className="navbar__login"><NavLink to="/login">  Login </NavLink> </div> }
                {isAuth && <div className="navbar__name"> {name} </div> }  
                {isAuth && <div className="navbar__logout">  <NavLink  to = "/create-post"> Create post</NavLink> </div> }  
                {isAuth && <div className="navbar__logout">  <NavLink  onClick={() => dispatch(logout())}> Logout</NavLink> </div> }  
                {isAuth && <div className="navbar__main">  <NavLink  to = "/"> Main</NavLink> </div> }  

            </div>
        </div>
    );
};

export default Navbar;