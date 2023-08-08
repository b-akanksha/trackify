import React from 'react'
import { scopes } from '../../utils/scopes'

const LoginPage = () => {
    return (
        <div>LoginPage <a
            className='button'
            href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID
                }&redirect_uri=${process.env.NODE_ENV === 'development'
                    ? process.env.REACT_APP_LOCAL_REDIRECT_URI
                    : process.env.REACT_APP_PROD_REDIRECT_URI
                }&scope=${scopes.join('%20')}&response_type=${process.env.REACT_APP_RESPONSE_TYPE
                }&state=${(Math.random() + 1).toString(36).substring(7)}`}
        >
            Login to Spotify
        </a></div>
    )
}

export default LoginPage