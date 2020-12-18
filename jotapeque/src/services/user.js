import axios from 'axios'
import { goToFeed, goToLogin, goToSignUp } from '../router/Coordinator'


const baseUrl = 'http://localhost:3003'


export const signUp = (body, history, setForm, formState, setError) => {
    // console.log(`[services]: [user.js]: [signup]: [body]:`, body)
    
    axios.post(`${baseUrl}/user/signup`, body)
        .then(response => {
            console.log(`[services]: [user.js]: [signup]: [response]:`, response.data.token)
            localStorage.setItem('token', response.data.token)
            // setForm(formState)
            goToLogin(history)
        })
        .catch(error => {
            let errorMsg = 'Erro ao cadastrar! Revise os dados informados e tente novamente.'
            switch (error.response.data.message) {
                case 'User already registered':
                    errorMsg = `* usuário já possui cadastro!`; break
                default: break
            }
            setError(errorMsg)
        })
}

export const login = (body, history, setForm, formState, setError, setNickname) => {
    // console.log(`[services]: [user.js]: [login]: [body]:`, body)
    axios.post(`${baseUrl}/user/login`, body)
        .then(response => {
            // console.log(`[services]: [user.js]: [login]: [response]:`, response.data.token)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('nickname', response.data.nickname)
            setNickname(response.data.nickname)
            goToFeed(history)
        })
        .catch(error => {
            // console.log('error:', error.response)
            setError('* Usuário ou senha incorretos!')
        })
}


export const validateUser = async (token) => {
    let result
    const config = {headers: {Authorization: token}}
    return await axios.get(`${baseUrl}/user/validate`, config)
        .then(response => { return true })
        .catch(error => { return false })
}

