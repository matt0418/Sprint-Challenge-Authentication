import React from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const StyleInput = styled.input`
    width: 35%;
    margin-bottom: 2%;
    padding: 1% .5%;
    font-size: 24px;
`

const StyledHeader = styled.h1`
    text-align: center;
    font-size: 50px;
    margin-top: 10%;
    margin-bottom: 2%;
`

const StyledButton = styled.button`
    width: 10%;
    border-radius: 10px;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 3%;
    padding-right: 3%;
    font-size: 20px;
    font-weight: bold;
`

const Info = styled.div`
    margin-top: 5%;
    text-align: center;
    border: 1px solid black;
    background: white;
    width: 20%;
    margin-left: 40%;
    border-radius: 10px;
`

const Linker = styled.p`
    text-decoration: none;
    color: black;
`

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleChanges = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const endpoint = 'http://localhost:3300/api/login'
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log(res)
                localStorage.setItem('jwt', res.data.token)
            })
            .catch(err => {
                console.log(err)
            })
        this.props.history.push('/')
    }

    render() {
        return(
            <div className='login'>
                <StyledHeader>Login</StyledHeader>
                <FormStyle onSubmit={this.handleSubmit}>
                    <label htmlFor='username' />
                        <StyleInput 
                        name='username'
                        id='username'
                        value={this.state.username}
                        type='text'
                        onChange={this.handleChanges}
                        />
                    <label htmlFor='password' />
                        <StyleInput 
                        name='password'
                        id='password'
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChanges}
                        />
                    <StyledButton type="submit">Login</StyledButton>
                </FormStyle>
                <Info>
                    <h3>First Time Here?</h3>
                    <Linker><Link to='/register'>Register Here</Link></Linker>
                </Info>
            </div>
        )
    }
}

export default withRouter(Login)