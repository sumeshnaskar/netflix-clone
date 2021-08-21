import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 4.375em 1.875em;
    margin: auto;

    @media(min-width: 1000px){
        padding: 4.375em 3.5em;
    }
`
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0.95em;

    @media(min-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: flex-start;

`

export const Link = styled.a`
    color: #757575;
    text-decoration: none;
    margin-bottom: 2em;
    font-size: 0.85rem
`

export const Title = styled.p`
    font-size: 1rem;
    color: #757575;
    margin-bottom: 2.4em;
`

export const Text = styled.p`
    font-size: 0.85rem;
    color: #757575;
    margin-bottom: 2.4em;
`

export const Break = styled.div`
    flex-basis: 0;
`