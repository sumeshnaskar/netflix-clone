import React, {useState, useContext, createContext} from 'react'
import { Container, Inner, Title, Header, Body, Item } from './styles/accordian'

const ToggleContext = createContext()

export default function Accordian({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Item = function AccordianItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value = {{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}


Accordian.Title = function AccordianTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordian.Header = function AccordianHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return <Header onClick={ () => setToggleShow(!toggleShow) } {...restProps}>
        {children}
        { 
            toggleShow ? 
            <img src= {process.env.PUBLIC_URL + "/images/icons/close-slim.png"} alt="Close"/> :
            <img src={process.env.PUBLIC_URL + "/images/icons/add.png"} alt="Open" />
        }
    </Header>
}

Accordian.Body = function AccordianBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext)
    return  toggleShow ? <Body {...restProps}>{children}</Body> : null 
}
