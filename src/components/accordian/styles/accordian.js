import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;    
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4.375em 2.8125em;
    margin: auto;
    width: 70%
    
`
export const Item = styled.div`
    max-width: 100%;
    margin-bottom: 10px;
    color: white;

    &:first-of-type{
        margin-top: 3em;
    }
`
export const Title = styled.h1`
    font-size: 2.1875rem;
    color: white;
    line-height: 1.1;
    margin-top: 0;
    text-align: center;

    @media(min-width: 600px){
        font-size: 3.125rem
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background: #303030;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 0.05em;
    font-weight: normal;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;

    img{
        width: 1rem;
        filter: brightness(0) invert(1);

        @media(min-width: 600px){
            width: 1.4rem;
        }
    }

    @media(min-width: 600px){
        font-size: 1.5rem;
    }

`

export const Body = styled.div`
    width: 100%;
    color: #DCDCDC;
    font-size: 1rem;
    line-height: 22px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

    @media(min-width: 600px){
        font-size: 1.25rem;
        line-height: 1.4;
    }
`

