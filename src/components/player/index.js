import React, { useContext, createContext, useState } from 'react'
import ReactDOM from 'react-dom'

import { Container, Button, Overlay, Inner, Close } from './styles/player'

const PlayerContext = createContext()

export default function Player({ children, ...restProps }){
    const [ showPlayer, setShowPlayer ] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo(){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer 
        ? ReactDOM.createPortal(
            <Overlay onClick = {()=>setShowPlayer(false)}>
                <Inner>
                    <video id='netflix-player' controls>
                        <source src={process.env.PUBLIC_URL + "/videos/bunny.mp4"} type="video/mp4" /> 
                    </video>
                    <Close/>
                </Inner>
            </Overlay>, document.body) 
        : null
}

Player.Button = function PlayerButton(){
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return <Button onClick = {() => setShowPlayer(!showPlayer)}>Play</Button>
}