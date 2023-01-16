import React from 'react';
import {useSelector } from 'react-redux';

const Profile = () => {
    const currentUser = (useSelector(state => state.user.currentUser.email))
    const str_user = String(currentUser)
    const name = str_user.split('@')[0];

    return (
        <div>
             <h1>Welcome to you profile page:  {name} </h1>
        </div>
    );
};

export default Profile;