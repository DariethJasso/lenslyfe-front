import { Avatar } from '@mui/material'
import React from 'react'

const History = () => {
  return (
    <div className='flex flex-col p-1 justify-center items-center'>
        <Avatar className=' border-[3px] border-blue-500' sx={{width: 70, height: 70}}/>
        <p className='text-white text-[12px]'>Username</p>
    </div>
  )
}

export default History