import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'

import requireAuth from '../requireAuth/requireAuth'
import Login from '../login/Login'

const StyledJokeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin-left: 10%;
`

const StyledJoke = styled.div`
    border: 1px solid black;
    margin: 3%;
    padding: 3% 5%;
    background: white;
    display: flex;
    flex-direction: column;
    width: 30%;
`

const StyledImg = styled.img`
    width: 80%;
    margin-left: 10%
`

const StyledP = styled.p`
    width: 80%;
    margin-left: 10%;
    font-size: 20px;
    font-weight: bold;
`
const StyledHeader = styled.h2`
    text-align: center;
    font-size: 50px;
`

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
                <StyledHeader>These are 'jokes'</StyledHeader>
                <StyledJokeContainer>
                    {this.state.jokes.map(joke => (
                        <StyledJoke key={joke.id}>
                            <StyledP>{joke.joke}</StyledP>
                            <StyledImg src='http://www.quickmeme.com/img/00/00ddce11eb42d72fd22ab4b7d9875eea4419fd39916dbe8dd946dfe8558ec180.jpg' alt=''/>
                        </StyledJoke>
                    ))}
                </StyledJokeContainer>
            </div>
        )
        
    }
}

export default requireAuth(Jokes)(Login)