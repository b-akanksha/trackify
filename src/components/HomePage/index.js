import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@mui/material'
import { fetchUserDetails } from '../../redux/reducers/authSlice';
import { months } from '../../utils/months';
import { fetchTopTracks } from '../../redux/reducers/trackSlice';
import { toJpeg } from 'html-to-image';

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
        toJpeg(elementRef.current, { cacheBust: false })
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
                <div className='flexLayout flexWrap'>
                    <div id="case3" class="cd-case">
                        <div class="album-art">
                            <Typography variant='h2' className='album-text'><b>My top <b>{currentMonth}</b> songs</b></Typography>
                            <div class="sup pos-tl"></div>
                            <div class="sup pos-tr"></div>
                            <div class="sup pos-bl"></div>
                            <div class="sup pos-br"></div>
                        </div>
                        <div class="spine"></div>
                    </div>
                    <div id="case4" class="cd-case">
                        <div class="album-art">
                            <div style={{ padding: '16px'}}>
                                {tracks.items?.map((item, index) => <Typography variant="subtitle1">#{index+1} {item.name}</Typography>)}
                            </div>
                            <div class="sup pos-tl"></div>
                            <div class="sup pos-tr"></div>
                            <div class="sup pos-bl"></div>
                            <div class="sup pos-br"></div>
                        </div>
                        <div class="spine"></div>
                    </div>
                </div>
                <Typography variant='subtitle1' style={{ textAlign: 'center' }}>Made with <i>Trackify</i></Typography>
            </div>
        </div>
    )
}

export default HomePage