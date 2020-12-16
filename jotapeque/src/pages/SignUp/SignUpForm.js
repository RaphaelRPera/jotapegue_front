import React, { useState } from 'react'
import { Button, TextField} from '@material-ui/core'
import { ButtonContainer, ErrorContainer, Form } from './style'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../services/user'


export const SignUpForm = () => {
    const history = useHistory()
    const [form, setForm, handleInputChange] = useForm(
        // {name:'', nickname:'', email:'', password:'', repassword:''}
        {name:'Patricia Bernardes', nickname:'patricia', email:'patricia@email.com', password:'labenu123', repassword:'labenu123'}
    )
    const [error, setError] = useState('')

    const inputChange = (event) => {
        setError('')
        handleInputChange(event)
    }

    const onClickSubmit = (event) => {
        event.preventDefault()

        if (form.password !== form.repassword) {
            setError('* Senhas não são iguais')
            return
        }

        const inputRepassword = document.getElementById('input-repassword')
        const repasswordIsValid = inputRepassword.checkValidity()
        inputRepassword.reportValidity()

        const inputPassword = document.getElementById('input-password')
        const passwordIsValid = inputPassword.checkValidity()
        inputPassword.reportValidity()

        const inputEmail = document.getElementById('input-email')
        const emailIsValid = inputEmail.checkValidity()
        inputEmail.reportValidity()

        const inputNickname = document.getElementById('input-nickname')
        const nicknameIsValid = inputNickname.checkValidity()
        inputNickname.reportValidity()

        const inputName = document.getElementById('input-name')
        const nameIsValid = inputName.checkValidity()
        inputName.reportValidity()

        if (nameIsValid && nicknameIsValid && emailIsValid && passwordIsValid && repasswordIsValid) {
            const formState = {name:'', nickname:'', email:'', password:''}
            signUp(form, history, setForm, formState, setError)
        }
    }


    return (
        <Form>
            <ErrorContainer error={error} > {error} </ErrorContainer>
            <TextField
                label={'Nome'}
                variant={'outlined'}
                name={'name'}
                // onChange={handleInputChange}
                onChange={inputChange}
                value={form.name}
                margin={'normal'}
                required
                autoFocus
                id={'input-name'}
                size="small"
            />
            <TextField
                label={'Apelido'}
                variant={'outlined'}
                name={'nickname'}
                onChange={inputChange}
                value={form.nickname}
                margin={'normal'}
                required
                // autoFocus
                id={'input-nickname'}
                size="small"
            />
            <TextField
                label={'Email'}
                variant={'outlined'}
                name={'email'}
                type={'email'}
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
                onChange={handleInputChange}
                value={form.password}
                margin={'normal'}
                required
                // autoFocus
                id={'input-password'}
                size="small"            
            />
            <TextField
                label={'Confirme a senha'}
                variant={'outlined'}
                name={'repassword'}
                type={'password'}
                onChange={inputChange}
                value={form.repassword}
                margin={'normal'}
                required
                // autoFocus
                id={'input-repassword'}
                size="small"            
            />
            <ButtonContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onClickSubmit}
                    type={'submit'}
                    fullWidth
                    disabled={error ? true : false}
                >Cadastrar
                </Button>
            </ButtonContainer>
        </Form>
    )
}
