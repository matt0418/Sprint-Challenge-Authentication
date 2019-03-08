import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import requireAuth from '../requireAuth/requireAuth'
import Login from '../login/Login'

class Jokes extends React.Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get('http://localhost:3300/api/jokes')
        
            .then(res => {
                console.log(res.data)
                this.setState({ jokes: res.data})
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        console.log(this.state.jokes)
        return(
            <div>
                <h2>These are 'jokes'</h2>
                <div>
                    {this.state.jokes.map(joke => (
                        <div key={joke.id}>
                            <p>{joke.joke}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
        
    }
}

export default requireAuth(Jokes)(Login)