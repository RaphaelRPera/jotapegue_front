import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'
import { SignUpForm } from './SignUpForm'
import { PageContainer, Title } from './style'



export const SignUp = () => {
    useProtectPage('signup')
    return (
        <PageContainer>
            <Title>Cadastre-se!</Title>
            <SignUpForm/>
        </PageContainer>
    )
}
