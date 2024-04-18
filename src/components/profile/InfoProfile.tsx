import { Avatar, Button } from '@mui/material'
import React from 'react'

const InfoProfile = ({user}: {user: any}) => {
  return (

    <div className='max-w-[500px] p-4'>
        <div className='flex items-center justify-between px-4'>
            <Avatar src={user?.avatar} sx={{width: 80, height: 80}}/> H
            <div className='flex text-white gap-2 border'>
                <p><span className='font-bold'>17</span>posts</p>
                <p><span className='font-bold'>83</span>followers</p>
                <p><span className='font-bold'>153</span>following</p>
            </div>
        </div>
        <div className='text-white px-3 flex flex-col gap-2 w-full'>
            <p className='font-bold'>{user?.name}</p>
            <p className='text-sm'>{user?.biography}</p>
            <div className='flex gap-2 h-6 justify-center'>
                <Button sx={{backgroundColor: 'gray'}} variant='contained'>Edit profile</Button>
                <Button sx={{backgroundColor: 'gray'}} variant='contained'>Add a bio</Button>
            </div>
        </div>
    </div>
  )
}

export default InfoProfile