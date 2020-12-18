import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { MainAppBar } from '../components/MainAppBar/MainAppBar'
import { Router } from '../router/Router'
import styled from 'styled-components'


const MainPageContainer = styled.main`
    /* background-color: lightblue; */
    background-color: #FAFAFA;
    min-height: 100vh;
    /* min-height: calc(100vh - 55px - 60px); */
    min-height: calc(100vh - 50px);
    box-sizing: border-box;
    display: grid;
    /* place-items: center; */
    justify-content:stretch;
    padding: 55px 5px 20px 5px;
    @media screen and (min-width: 736px) {padding: 55px 20px 20px 20px;};
    /* align-content: center; */
    /* position: relative; */
`

export const AppContainer = () => {
    const [nickname, setNickname] = useState()


    return (
        <BrowserRouter>
            <MainAppBar nickname={nickname} />
                <MainPageContainer>
                    <Router setNickname={setNickname} />
                </MainPageContainer>
            <Footer/>
        </BrowserRouter>
    )
}
