import React from 'react'
import { ImageCard } from './ImageCard'
import { PageContainer } from './styleContainer'


export const ImageContainer = () => {
    return (
        <PageContainer>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
        </PageContainer>
    )
}
