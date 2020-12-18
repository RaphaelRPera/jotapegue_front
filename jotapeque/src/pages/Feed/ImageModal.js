import React, { useEffect, useState } from 'react'
import { PageContainer, ModalContainer, CloseButton, Img, SideArrow, SidePanel } from './styleModal'


export const ImageModal = (props) => {
    const [index, setIndex] = useState(props.index)
    const imagesBd = props.imagesBd
    // const index = props.index
    const image = imagesBd[index]

    const subtitle = image.subtitle
    const date = image.date
    const collection = image.collection

    return (
        <PageContainer>
            {console.log(image)}
            {console.log(index)}

            <SideArrow onClick={() => {index > 0 && setIndex(index - 1)}} active={index > 0}> {'<'} </SideArrow>
            <ModalContainer>
                {/* {index > 0
                    ? 
                    <SideArrow onClick={() => setIndex(index - 1)} > {'<'} </SideArrow>
                    :
                    <SideArrow> {' '} </SideArrow>
                } */}

                <Img src={image.file} />
                <CloseButton onClick={() => props.setModal({open: false, index})} > x </CloseButton>
                <SidePanel>
                    <div>{subtitle}</div>
                    <div>{date}</div>
                    <div>{collection}</div>
                </SidePanel>
                {/* {index < imagesBd.length - 1
                    ? 
                    <SideArrow onClick={() => setIndex(index + 1)} > {'>'} </SideArrow>
                    :
                    <SideArrow> {' '} </SideArrow>
                } */}
            </ModalContainer>
            <SideArrow onClick={() => {index < imagesBd.length - 1 && setIndex(index + 1)}}  active={index < imagesBd.length - 1} > {'>'} </SideArrow>

        </PageContainer>
    )
}
