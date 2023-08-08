import { Typography } from '@mui/material'
import React from 'react'

const CustomTable = ({tracks}) => {
    return (
        tracks?.items?.map((data, index) => <div className='trackDetails' key={data?.id}>
            <div><Typography variant='h4'>#{index+1}</Typography></div>
            <div className='trackName'>
                <Typography variant='subtitle1'>{data?.name}</Typography>
                <Typography variant='caption'><i>{data?.artists[0]?.name}</i></Typography>
            </div>
        </div>)
    )
}

export default CustomTable