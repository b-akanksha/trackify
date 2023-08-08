import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@mui/material'
import CustomTable from '../Table';
import { fetchUserDetails } from '../../redux/reducers/authSlice';
import { months } from '../../utils/months';
import { fetchTopTracks } from '../../redux/reducers/trackSlice';
import { toPng } from 'html-to-image';

const HomePage = ({ handleLogout }) => {
    const { user } = useSelector(state => state.auth);
    const { tracks } = useSelector(state => state.tracks);
    const elementRef = useRef(null);

    const d = new Date();
    const currentMonth = months[d.getMonth()];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetails());
        dispatch(fetchTopTracks());
    }, [])

    const htmlToImageConvert = () => {
        toPng(elementRef.current, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "top-tracks.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className='flexLayout textLayout'>
            <div className='flexLayout logoutButtonLayout'>
                <Button onClick={htmlToImageConvert} variant='outlined'>Download</Button>
                <Button onClick={handleLogout} variant='outlined'>Logout</Button>
            </div>
            <div ref={elementRef}>
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
        </div>
    )
}

export default HomePage