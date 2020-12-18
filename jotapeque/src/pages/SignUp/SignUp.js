import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { protectPage } from '../../hooks/protectPage'
import { SignUpForm } from './SignUpForm'
import { PageContainer, Title } from './style'



export const SignUp = () => {
    const [protect, setProtect] = useState(false)
    const history = useHistory()

    const verifyProtect = () => {
        protectPage('signup', history) .then(() => { setProtect(true) })
    }

    useEffect(() => {
        verifyProtect()
    }, [])

    return (
        <>
            {protect && 
                <PageContainer>
                    <Title>Cadastre-se!</Title>
                    <SignUpForm/>
                </PageContainer>
            }
        </>
    )
}
