import styled from 'styled-components'


export const PageContainer = styled.header`
    background-color: rgba(255,255,255,1);
    border-bottom: 1px solid rgba(200,200,200,0.4);
    box-shadow: 0 1px 4px rgba(230,230,230, 0.3);
    height: 55px;
    padding: 0 5px;
    @media screen and (min-width: 736px) {padding: 0 20px;};
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    position: fixed;
    width: 100%;
    z-index:9;
`

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 910px;
    min-width: 270px;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
`

export const LogoFirstLetter = styled.span`
    font-size: 25px;
`


export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px 7px;
    margin-left: 1vw;
    @media screen and(min-width: 350px) {padding: 6px 10px; margin-left: 2.5vw;};
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    transition: 0.1s;
    :hover {background-color: rgba(242,242,242,1)};
`

export const ButtonIcon = styled.div`

`

export const ButtonText = styled.div`
    font-size: 14px;
    @media screen and (min-width: 350px) {font-size: 16px;};
`


export const MenuButton = styled.div`
    cursor: pointer;
    margin: 0 10px;
    user-select: none;
`


