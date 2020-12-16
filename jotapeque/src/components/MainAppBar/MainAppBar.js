import React from 'react'
import { MenuButton, MenuContainer, PageContainer } from './style'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp, goToAddImage, goToFeed } from '../../router/Coordinator'


export const MainAppBar = () => {
    const history = useHistory()
    return (
        <PageContainer>
            <MenuContainer>
                <MenuButton onClick={() => goToLogin(history)} >Login</MenuButton>
                <MenuButton onClick={() => goToSignUp(history)} >SignUp</MenuButton>
                <MenuButton onClick={() => goToAddImage(history)} >Adicionar Imagem</MenuButton>
                <MenuButton onClick={() => goToFeed(history)} >Feed</MenuButton>
            </MenuContainer>
        </PageContainer>
    )
}
