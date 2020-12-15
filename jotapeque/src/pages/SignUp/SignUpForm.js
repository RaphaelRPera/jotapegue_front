import React from 'react'
import { Button, TextField} from '@material-ui/core'
import { ButtonContainer, Form } from './style'


export const SignUpForm = () => {
    return (
        <Form>
            <TextField
                label={'Nome'}
                variant={'outlined'}
                name={'name'}
                // onChange={handleInputChange}
                // value={form.name}
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
                // onChange={handleInputChange}
                // value={form.name}
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
                // onChange={handleInputChange}
                // value={form.name}
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
                // onChange={handleInputChange}
                // value={form.name}
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
                    // onClick={onClickSubmit}
                    type={'submit'}
                    fullWidth
                >Cadastrar</Button>
            </ButtonContainer>
        </Form>
    )
}
