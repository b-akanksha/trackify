import React from 'react'
import { scopes } from '../../utils/scopes'
import { Typography } from '@mui/material'
import { ReactComponent as Spotify } from '../../assets/spotify-icon.svg';

const LoginPage = () => {
    return (
        <div className='flexLayout loginLayout'>
            <div className='flexLayout loginContainer'>
                <div className='gradContainer'>
                    <div className='flexLayout textLayout'>
                        <Typography variant='body1'>This is</Typography>
                        <Typography variant='subtitle1'><b><i>Trackify</i></b></Typography>
                    </div>
                    <div className='grad' />

                </div>
                <div>
                <Typography variant='h1'><i>Trackify</i></Typography>
                <Typography variant='body'>Discover your music listening habits with <i>Trackify</i></Typography>
                <div className='flexLayout spotifyContainer'>
                    <Spotify className='spotifySvg'/>
                    <Typography variant='subtitle1'>
                    <a
                        className='button'
                        href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID
                            }&redirect_uri=${process.env.NODE_ENV === 'development'
                                ? process.env.REACT_APP_LOCAL_REDIRECT_URI
                                : process.env.REACT_APP_PROD_REDIRECT_URI
                            }&scope=${scopes.join('%20')}&response_type=${process.env.REACT_APP_RESPONSE_TYPE
                            }&state=${(Math.random() + 1).toString(36).substring(7)}`}
                    >
                        Login to Spotify
                    </a> to discover.
                    </Typography>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage