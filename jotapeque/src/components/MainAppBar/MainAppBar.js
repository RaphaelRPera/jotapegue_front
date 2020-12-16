import React from 'react'
import { MenuButton, PageContainer } from './style'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp, goToAddImage } from '../../router/Coordinator'


export const MainAppBar = () => {
    const history = useHistory()
    return (
        <PageContainer>
            MainAppBar
            <MenuButton onClick={() => goToLogin(history)} >Login</MenuButton>
            <MenuButton onClick={() => goToSignUp(history)} >SignUp</MenuButton>
            <MenuButton onClick={() => goToAddImage(history)} >Adicionar Imagem</MenuButton>
        </PageContainer>
    )
}
