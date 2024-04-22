import { Badge } from '@mui/material'
import React from 'react'
import { IconHeart, IconMessage } from '@tabler/icons-react';

export const AppBarMobile = () => {
  return (
    <div className=' text-white h-[50px] flex justify-between px-5 items-center '>
        <p className='font-extrabold'>LensLyfe</p>
        <div className='flex gap-3 items-center'>
            <Badge variant='dot' color="primary">
                <IconHeart />
            </Badge>
            <Badge badgeContent={4} color="primary">
                <IconMessage />
            </Badge>
        </div>
    </div>
  )
}
