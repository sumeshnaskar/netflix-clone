import styled from "styled-components"

export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    flex-direction: column;
    margin: auto;
    width: 100%;
    
    @media(min-width: 1000px){
        flex-direction: ${ ({ direction }) => direction };
    }
`
export const Pane = styled.div`
    width: 100%;
    padding: 0 2.8em;
    text-align: center;

    @media(min-width: 1000px){
        width: 50%;
    }
`
export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 2.125em 5%;
    color: white;
    overflow: hidden;
`

export const Container = styled.section`
    background-color: black;

    ${Item}: last-of-type h2{
        margin-bottom: 3.125em;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.1;
    margin-bottom: 0.5em;

    @media(min-width: 600px){
        font-size: 3.125rem
    }
`
export const SubTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: normal;
    line-height: normal;

    @media(min-width: 600px){
        font-size: 1.4rem
    }    
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`