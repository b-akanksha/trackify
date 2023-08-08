import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUserDetails } from '../../redux/reducers/authSlice';

const HomePage = ({ handleLogout }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetails());
    }, [])
    return (
        <div>HomePage <Button color='primary' onClick={handleLogout}>Logout</Button></div>
    )
}

export default HomePage