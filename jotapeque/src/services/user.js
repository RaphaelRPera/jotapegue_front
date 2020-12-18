import axios from 'axios'
import { goToFeed, goToLogin } from '../router/Coordinator'


const baseUrl = 'http://localhost:3003'


export const signUp = (body, history, setForm, formState, setError) => {
    axios.post(`${baseUrl}/user/signup`, body)
        .then(response => {
            localStorage.setItem('token', response.data.token)
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
    axios.post(`${baseUrl}/user/login`, body)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('nickname', response.data.nickname)
            setNickname(response.data.nickname)
            goToFeed(history)
        })
        .catch(error => {
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

