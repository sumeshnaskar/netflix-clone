import React, { useState } from 'react'

import { SIGN_IN } from '../constants/routes'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'

export default function Signup(){
    const [ firstName, setFirstName ] = useState('')
    const [ emailAddress, setEmailAddress ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('') 

    const inValid = firstName === '' | emailAddress === '' | password === ''

    const handleSignup = (event) => {
        event.preventDefault()
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