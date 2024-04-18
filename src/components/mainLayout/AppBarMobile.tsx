import { Badge } from '@mui/material'
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export const AppBarMobile = () => {
  return (
    <div className='text-white h-[50px] flex justify-between px-5 items-center '>
        <p className='font-extrabold'>LensLyfe</p>
        <div className='flex gap-3 items-center'>
            <Badge variant='dot' color="primary">
                <FavoriteBorderOutlinedIcon />
            </Badge>
            <Badge badgeContent={4} color="primary">
                <ChatBubbleOutlineOutlinedIcon />
            </Badge>
        </div>
    </div>
  )
}
