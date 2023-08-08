import { Button } from '@mui/material'
import React from 'react'

const HomePage = ({ handleLogout }) => {
    return (
        <div>HomePage <Button color='primary' onClick={handleLogout}>Logout</Button></div>
    )
}

export default HomePage