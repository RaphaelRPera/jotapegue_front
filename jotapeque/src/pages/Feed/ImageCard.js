import React, { useState } from 'react'
import { CardContainer, CardHover, Img, ImgContainer } from './styleCard'


export const ImageCard = () => {
    const imgUrl = 'https://img.olhardigital.com.br/uploads/acervo_imagens/2020/05/r16x9/20200511124538_1200_675_-_lancamento_de_foguete_soyuz.jpg'
    const [isHover, setIsHover] = useState(false)

    return (
        <CardContainer onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <ImgContainer imgUrl={imgUrl}>
                {isHover && <CardHover>TESTE</CardHover>}
            </ImgContainer>
        </CardContainer>
    )
}