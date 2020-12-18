import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { protectPage } from '../../hooks/protectPage'
// import { goToLogin } from '../../router/Coordinator'
import { getImageAll } from '../../services/image'
import { ImageCard } from './ImageCard'
import { ImageModal } from './ImageModal'
import { PageContainer } from './styleContainer'


export const ImageContainer = () => {
    const [imagesBd, setImagesBd] = useState()
    const [modal, setModal] = useState({open:false, index: undefined})
    const history = useHistory()

    const getImages = async () => {
        console.log('getting images...')
        await getImageAll()
            .then(response => {              
                switch (response.status) {
                    case 200: setImagesBd(response.data); break;
                    case 401: console.log(`[ImageContainer]: [getImages]: Acesso não autorizado 401`); protectPage('feed', history) ;break;
                    case 400: console.log(`[ImageContainer]: [getImages]: Acesso não autorizado 400`); break;
                    default: console.log(`[ImageContainer]: [getImages]: [response]:`, response); break;
                }
                console.log('getting images... DONE!')
            })
    }

    const cards = imagesBd && imagesBd.map((image, index) => {
        return <ImageCard key={index} image={image} index={index} setModal={setModal}/>
    })

    useEffect(() => {
        getImages()
    }, [])

    return (
        <PageContainer>
            {/* {console.log(modal)} */}
            {modal.open && <ImageModal imagesBd={imagesBd} setModal={setModal} index={modal.index} />}
            {cards}
        </PageContainer>
    )
}
