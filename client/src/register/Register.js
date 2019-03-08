import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
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

class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChanges = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('inside handle')
        const endpoint = 'http://localhost:3300/api/register'
        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('inside then')
                this.setState({
                    username: res.data.username,
                    password: res.data.password
                })
            })
            .catch(error => {
                console.log(error)
            })
        this.props.history.push('/')
    }
    
    render() {
        return(
            <div>
                <StyledHeader>Register</StyledHeader>
                <FormStyle onSubmit={this.handleSubmit}>
                    <label htmlFor='username'/>
                        <StyleInput 
                        name='username'
                        id='username'
                        value={this.state.username}
                        onChange={this.handleChanges}
                        type='text'
                        />
                    <label htmlFor='password'/>
                        <StyleInput 
                        name='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.handleChanges}
                        type='text'
                        />
                    <StyledButton type="submit">Register</StyledButton>
                </FormStyle>
            </div>
        )
    }

}

export default withRouter(Register)