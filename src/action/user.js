import axios from 'axios'
import {setUser} from "../reducers/userReducer";

export const registration = async (email, password) => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    try {
        const response = await axios.post(`https://postes.herokuapp.com/api/auth/registration`, {
            email,
            password,
            color:randomColor
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}
export const login =  (email, password,color ) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://postes.herokuapp.com/api/auth/login`, {
                email,
                password,
                color
            })
            // console.log (response.data.user.color)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('color', response.data.user.color)
        } catch (e) {
            // console.log(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://postes.herokuapp.com/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            // console.log(e.response.data)
            localStorage.removeItem('token')
        }
    }
}