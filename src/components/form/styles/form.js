import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 50vh;
    width: 100%;
    background-color: rgba(0,0,0,.75);
    max-width: 450px;
    border-radius: 5px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;

    @media(max-width: 600px){
        max-width: 90%;
    }

`

export const Error = styled.div`
    background: #e87c03;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`

export const Text = styled.h1`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`

export const TextSmall = styled.h2`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`

export const Link = styled(RouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`

export const Input = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    padding: 5px 20px;
    line-height: 50px;
    margin-bottom: 20px;

    &:last-of-type{
        margin-bottom: 30px;
    }
`

export const Submit = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;
     
    &:disabled{
        opacity: 0.5;
    }
`
