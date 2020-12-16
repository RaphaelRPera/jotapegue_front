import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'
import { CreateImageForm } from './CreateImageForm'
import { PageContainer, Title } from './style'

export const CreateImage = () => {
    useProtectPage('createimage')
    return (
        <PageContainer>
            <Title>Adicionar imagem</Title>
            <CreateImageForm/>
        </PageContainer>
    )
}
