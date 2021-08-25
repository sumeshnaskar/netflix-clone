import React from 'react'
import { Container, Title, List, Item, Picture, Name } from './styles/profile'

export default function Profiles({ children, ...restProps }){
    return <Container {...restProps} > {children} </Container>
}

Profiles.Title = function ProfilesTitles({ children, ...restProps }){
    return <Title {...restProps} > {children} </Title>
}

Profiles.List = function ProfilesLists({ children, ...restProps }){
    return <List {...restProps} > {children} </List>
}

Profiles.User = function ProfilesUsers({ children, ...restProps }){
    return <Item {...restProps} > {children} </Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` :
    '/images/misc/loading.gif'} />
}

Profiles.Name = function ProfilesNames({ children, ...restProps }){
    return <Name {...restProps} > {children} </Name>
}