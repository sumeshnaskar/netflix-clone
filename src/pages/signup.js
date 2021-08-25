import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'
import { BROWSE, SIGN_IN } from '../constants/routes'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'

export default function Signup(){
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [ firstName, setFirstName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('') 

    const inValid = firstName === '' | emailAddress === '' | password === ''

    const handleSignup = (event) => {
        event.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(result => result.user
                .updateProfile({
                displayName: firstName,
                photoURL: (Math.floor(Math.random * 5)) + 1
                })
                .then(()=>{
                    setEmailAddress('')
                    setPassword('')
                    setError('')
                    history.push(BROWSE)
                })
            ).catch(error => setError(error.message))
    }

    return(
        <HeaderContainer>
            <Form>
                <Form.Title>Signup</Form.Title>
                { error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method='POST'>
                    <Form.Input 
                        placeholder = "First Name"
                        value = {firstName}
                        onChange = { ({target}) => setFirstName(target.value) }
                    />
                    <Form.Input 
                        placeholder = "Email Address"
                        value = {emailAddress}
                        onChange = { ({target}) => setEmailAddress(target.value) }
                    />
                    <Form.Input 
                        placeholder = "Password"
                        type = "password"
                        value = {password}
                        autoComplete = "off"
                        onChange = { ({target}) => setPassword(target.value) }
                    />
                    <Form.Submit disabled = {inValid} type = "submit">
                        Sign up
                    </Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to = {SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by google reCAPTCHA.                        
                    </Form.TextSmall> 
                </Form.Base>
            </Form>
        </HeaderContainer>
    )
}