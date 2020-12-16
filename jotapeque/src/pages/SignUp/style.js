import styled from 'styled-components'


export const PageContainer = styled.div`
    /* background-color: lightcoral; */
    display: grid;
    justify-items: center;
    align-content: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    /* background-color: lightcyan; */
    margin-top: 0;
`

export const ErrorContainer = styled.div`
    color: #DD1818;
    transition: 0.5s;
    display: ${props => props.error ? 'block' : 'none'};
    text-align: left;
`

export const Form = styled.form`
    /* background-color: lightgreen; */
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    width: 95%;
    max-width: 600px;
    min-width: 250px;
    /* margin-bottom: 100vh; */
`

export const ButtonContainer = styled.div`
    margin: 20px 0 0 0;
`

