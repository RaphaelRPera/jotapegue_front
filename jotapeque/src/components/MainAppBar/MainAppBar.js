import React from 'react'
import { ButtonContainer, ButtonIcon, ButtonText, LogoContainer, LogoFirstLetter, MainContainer, MenuButton, MenuContainer, PageContainer } from './style'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToAddImage, goToFeed } from '../../router/Coordinator'


export const MainAppBar = (props) => {
    const history = useHistory()
    const loginButton = (props.nickname || localStorage.getItem('nickname')) || 'entre'

    return (
        <PageContainer>
            {console.log(props.nickname)}
            <MainContainer>
                <LogoContainer onClick={() => goToFeed(history)} >
                    <LogoFirstLetter>J</LogoFirstLetter>OTAPEGUE
                </LogoContainer>

                <MenuContainer>
                    <ButtonContainer onClick={() => goToAddImage(history)} >
                        {/* <ButtonIcon>+</ButtonIcon> */}
                        <ButtonText>+imagem</ButtonText>
                    </ButtonContainer>

                    <ButtonContainer onClick={() => goToFeed(history)} >
                        {/* <ButtonIcon>=</ButtonIcon> */}
                        <ButtonText>feed</ButtonText>
                    </ButtonContainer>

                    <ButtonContainer onClick={() => {loginButton === 'entre' && goToLogin(history)}} >
                        {/* <ButtonIcon>#</ButtonIcon> */}
                        <ButtonText> {loginButton} </ButtonText>
                    </ButtonContainer>
                </MenuContainer>
            </MainContainer>
        </PageContainer>
    )
}
