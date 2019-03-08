import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username' />
                        <input 
                        name='username'
                        id='username'
                        value={this.state.username}
                        type='text'
                        onChange={this.handleChanges}
                        />
                    <label htmlFor='password' />
                        <input 
                        name='password'
                        id='password'
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChanges}
                        />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)