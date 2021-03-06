import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { BROWSE, SIGN_UP } from '../constants/routes'

export default function Signin(){
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [ error, setError ] = useState('')
    const [ emailaddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')

    const isInvalid = emailaddress === '' | password === ''
    const handleSignin = ( event ) => {
        event.preventDefault()
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailaddress, password)
            .then( () => {
                setEmailAddress('')
                setPassword('')
                setError('')
                history.push(BROWSE)
            })
            .catch(error => setError(error.message))
    }

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    { error && <Form.Error>{error}</Form.Error> } 

                    <Form.Base onSubmit={handleSignin} method='POST'>
                        <Form.Input 
                            placeholder = "Email Address" 
                            value = {emailaddress}
                            onChange = { ({ target }) => setEmailAddress(target.value) }
                        />
                        <Form.Input 
                            placeholder = "Password"
                            type = "password"
                            value = {password}
                            onChange = { ({ target }) => setPassword(target.value) }
                            autoComplete = "off"
                        />
                        <Form.Submit type = "submit" disabled = {isInvalid}>
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to = {SIGN_UP}>Sign up now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by google reCAPTCHA.                        
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}