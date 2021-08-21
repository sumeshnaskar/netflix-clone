import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.2em;
    flex-wrap: wrap;
    height: 100%;

    @media(min-width: 1000px){
        flex-direction: row;
        
    }
`
export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 0.6em;
    height: 4.375rem;
    box-sizing: border-box;


`
export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 3.125rem;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 2em;
    font-size: 1rem;
    border: 0;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1.2em;

    img{
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 1rem;

        @media(min-width: 1000px){
            width: 1.4rem;
        }
    }

    &:hover{
        background: #f40612;
    }

    @media(min-width: 1000px){
        height: 4.375rem;
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        margin: 0;
    }
`
export const Text = styled.p`
    font-size: 1rem;
    color: white;
    text-align: center;

    @media(min-width: 600px){
        font-size: 1.15rem;
    }
`