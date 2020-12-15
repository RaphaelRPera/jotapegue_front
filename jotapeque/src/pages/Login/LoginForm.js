import React from 'react'
import { Button, TextField} from '@material-ui/core'
import { ButtonContainer, Form } from './style'


export const LoginForm = () => {
    return (
        <Form>
            <TextField
                label={'Email ou apelido'}
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
                >Login</Button>
            </ButtonContainer>
        </Form>
    )
}
