import { Button, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserDetails } from '../../redux/reducers/authSlice';
import { months } from '../../utils/months';
import CustomTable from '../Table';
import { fetchTopTracks } from '../../redux/reducers/trackSlice';

const HomePage = ({ handleLogout }) => {
    const { user } = useSelector(state => state.auth);
    const { tracks } = useSelector(state => state.tracks);

    console.log({tracks})
    const d = new Date();
    const currentMonth = months[d.getMonth()];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetails());
        dispatch(fetchTopTracks());
    }, [])
    return (
        <div className='flexLayout textLayout'>
            <div className='flexLayout logoutButtonLayout'>
                <span />
                <Button onClick={handleLogout} variant='outlined'>Logout</Button>
            </div>
            <div className='flexLayout loginContainer'>
                <div className='gradContainer'>
                    <div className='flexLayout thisIsText'>
                        <Typography variant='subtitle1'>This is {currentMonth}'s </Typography>
                        <Typography variant='body1'><b><i>Top Tracks</i></b></Typography>
                    </div>
                    <div className='grad' />
                </div>
                <div >
                    <Typography variant='h4'>This is {user.display_name}'s current fav!</Typography>
                    <Typography variant='body1'>The tunes that you can't get enough of and the tracks that have been stuck in your head for days! </Typography>
                </div>
            </div>
            <div className='divider' />
            <div className='gridContainer'>
                <CustomTable tracks={tracks} />
            </div>
        </div>
    )
}

export default HomePage