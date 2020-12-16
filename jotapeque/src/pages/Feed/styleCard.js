import styled from 'styled-components'


export const CardContainer = styled.div`
    /* background-color: whitesmoke; */
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;

    box-shadow: 2px 2px 2px rgb(200,200,200);
    border-radius: 3px;
`

export const ImgContainer = styled.div`
    /* background-image: url('https://img.olhardigital.com.br/uploads/acervo_imagens/2020/05/r16x9/20200511124538_1200_675_-_lancamento_de_foguete_soyuz.jpg'); */
    background-image: url(${props => props.imgUrl});
    width: 100%;
    padding-top: 100%; // ratio 1:1
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    border-radius: 3px;
`

export const CardHover = styled.div`
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    color: whitesmoke;
    font-weight: bold;

    :active{background-color: rgba(245,245,245,0.3);};

    border-radius: 3px;
`
