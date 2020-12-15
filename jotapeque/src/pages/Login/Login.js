import React from 'react'
import { LoginForm } from './LoginForm'
import { PageContainer, Title } from './style'

export const Login = () => {
    return (
        <PageContainer>
            <Title>Login</Title>
            <LoginForm/>
        </PageContainer>
    )
}
