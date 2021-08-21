import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src })=>(src ? '../images/misc/$(src).jpg' : 
        '../images/misc/home-bg.jpg')}) 
        top left / cover no-repeat;

    @media(max-width: 1000px){
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && 'background: none;'}
    }
`
export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1000px){
        margin-right: 0 30px;
    }
`
export const ButtonLink = styled(RouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }


`
export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media(min-width: 1000px){
        height: 45px;
        width: 167px; 
    }
`