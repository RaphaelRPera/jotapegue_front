import React, { useEffect, useState } from 'react'
import { CreateImageForm } from './CreateImageForm'
import { PageContainer, Title } from './style'
import { useHistory } from 'react-router-dom'
import { protectPage } from '../../hooks/protectPage'

export const CreateImage = () => {
    const [protect, setProtect] = useState(false)
    const history = useHistory()

    const verifyProtect = () => {
        protectPage('createimage', history) .then(() => { setProtect(true) })
    }

    useEffect(() => {
        verifyProtect()
    }, [])
    return (
        <>
            {protect &&
                <PageContainer>
                    <Title>Adicionar imagem</Title>
                    <CreateImageForm/>
                </PageContainer>
            }
        </>
    )
}
