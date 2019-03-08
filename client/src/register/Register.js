import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'/>
                        <input 
                        name='username'
                        id='username'
                        value={this.state.username}
                        onChange={this.handleChanges}
                        type='text'
                        />
                    <label htmlFor='password'/>
                        <input 
                        name='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.handleChanges}
                        type='text'
                        />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }

}

export default withRouter(Register)