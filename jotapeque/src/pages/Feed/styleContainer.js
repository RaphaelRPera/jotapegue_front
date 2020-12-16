import styled from 'styled-components'


export const PageContainer = styled.div`
    /* background-color: lightblue; */
    padding: 5px;
    width: 100%;
    max-width: 910px;
    min-width: 270px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items:center;
    gap: 5px;

    @media screen and (min-width: 320px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media screen and (min-width: 377px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media screen and (min-width: 736px) {
        padding: 20px;
        gap:20px;
    };

`
