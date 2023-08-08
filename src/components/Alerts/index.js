import React from 'react'
import { Alert } from '@mui/material'

const AlertBanner = ({ open, handleClose, message }) => {
    return (
        open && <Alert onClose={handleClose} severity="error">{message}</Alert>
    )
}

export default AlertBanner