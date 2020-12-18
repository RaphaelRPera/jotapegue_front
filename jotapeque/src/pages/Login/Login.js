import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { protectPage } from '../../hooks/protectPage'
import { LoginForm } from './LoginForm'
import { PageContainer, Title } from './style'

export const Login = (props) => {
    const [protect, setProtect] = useState(false)
    const history = useHistory()

    const verifyProtect = () => {
        protectPage('login', history).then(() => { setProtect(true) })
    }

    useEffect(() => {
        verifyProtect()
    })

    return (
        <>
            {protect &&
                <PageContainer>
                    <Title>Login</Title>
                    <LoginForm setNickname={props.setNickname} />
                </PageContainer>
            }
        </>
    )
}
