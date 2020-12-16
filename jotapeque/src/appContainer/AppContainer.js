import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { MainAppBar } from '../components/MainAppBar/MainAppBar'
import { Router } from '../router/Router'
import styled from 'styled-components'


const MainPageContainer = styled.main`
    background-color: lightblue;
    /* min-height: 100vh; */
    min-height: calc(100vh - 120px - 60px);
    box-sizing: border-box;
    display: grid;
    /* place-items: center; */
    justify-content:stretch;
    /* align-content: center; */
`

export const AppContainer = () => {
    return (
        <BrowserRouter>
            <MainAppBar/>
                <MainPageContainer>
                    <Router/>
                </MainPageContainer>
            <Footer/>
        </BrowserRouter>
    )
}
