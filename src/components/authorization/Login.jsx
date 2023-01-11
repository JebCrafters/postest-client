import React, {useState} from 'react';
import '../authorization/authorization.css'
import Input from "../utils/Input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../action/user";
import Button from '../utils/btn/Button';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Login</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Your email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Your password..."/>
            <Button  onClick={() => dispatch(login(email, password))} title='Login'>Sign in</Button>
        </div>  
    );
};

export default Login;