import React from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:3300/api'

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt')
        return options
    },
    function(err) {
        return Promise.reject(err)
    }
)

export default (Component1) => (Component2) => {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt')
            return(
                <div>
                    {token ? <Component1 {...this.props}/> : <Component2 {...this.props}/>}
                </div>
            )
        }
    }
}