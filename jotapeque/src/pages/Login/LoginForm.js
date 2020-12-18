import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import { ButtonContainer, ErrorContainer, Form, Link } from './style'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'
import { useProtectPage } from '../../hooks/useProtectPage'
import { goToSignUp } from '../../router/Coordinator'


export const LoginForm = (props) => {
    const history = useHistory()
    const [form, setForm, handleInputChange] = useForm({email:'', password:''})
    const [error, setError] = useState('')
    const setNickname = props.setNickname

    const inputChange = (event) => {
        setError('')
        handleInputChange(event)
    }


    const onClickSubmit = (event) => {
        event.preventDefault()
        
        const inputPassword = document.getElementById('input-password')
        const passwordIsValid = inputPassword.checkValidity()
        inputPassword.reportValidity()

        const inputEmail = document.getElementById('input-email')
        const emailIsValid = inputEmail.checkValidity()
        inputEmail.reportValidity()

        if (emailIsValid && passwordIsValid) {
            const formState = {email:'', password:''}
            login(form, history, setForm, formState, setError, setNickname)
        }
    }

    return (
        <Form>
            <ErrorContainer error={error} > {error} </ErrorContainer>
            <TextField
                label={'Email ou apelido'}
                variant={'outlined'}
                name={'email'}
                onChange={inputChange}
                value={form.email}
                margin={'normal'}
                required
                // autoFocus
                id={'input-email'}
                size="small"
            />

            <TextField
                label={'Senha'}
                variant={'outlined'}
                name={'password'}
                type={'password'}
                onChange={inputChange}
                value={form.password}
                margin={'normal'}
                required
                // autoFocus
                id={'input-password'}
                size="small"            
            />

            <ButtonContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onClickSubmit}
                    type={'submit'}
                    fullWidth
                 >Login
                </Button>

                <Button
                    onClick={() => goToSignUp(history)}
                    color={'primary'}
                    size={'small'}
                 >Cadastre-se
                </Button>
            </ButtonContainer>
        </Form>
    )
}
