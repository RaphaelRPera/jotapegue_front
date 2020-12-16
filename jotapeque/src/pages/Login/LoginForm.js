import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import { ButtonContainer, ErrorContainer, Form } from './style'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login } from '../../services/user'


export const LoginForm = () => {
    const history = useHistory()
    const [form, setForm, handleInputChange] = useForm({email:'', password:''})
    const [error, setError] = useState('')

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
            login(form, history, setForm, formState, setError)
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
                autoFocus
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
                >Login</Button>
            </ButtonContainer>
        </Form>
    )
}
