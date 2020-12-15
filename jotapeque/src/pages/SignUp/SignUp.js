import React from 'react'
import { SignUpForm } from './SignUpForm'
import { PageContainer, Title } from './style'



export const SignUp = () => {
    return (
        <PageContainer>
            <Title>Cadastre-se!</Title>
            <SignUpForm/>
        </PageContainer>
    )
}
