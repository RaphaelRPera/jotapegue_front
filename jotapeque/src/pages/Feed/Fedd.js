import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { protectPage } from '../../hooks/protectPage'
import { useProtectPage } from '../../hooks/useProtectPage'
import { ImageContainer } from './ImageContainer'
import { PageContainer } from './style'



export const Feed = () => {
    const [protect, setProtect] = useState(false)
    const history = useHistory()

    // useProtectPage('feed').then(() => {console.log('uhuull')})
    // protectPage('feed', history).then(() => {console.log('uhuull')})

    const verifyProtect = () => {
        protectPage('feed', history) .then(() => { setProtect(true) })
    }

    useEffect(() => {
        verifyProtect()
    }, [])


    return (
        <>
            {protect &&
                <PageContainer>
                    <ImageContainer/>
                </PageContainer>
            }
        </>

    )
    


}
