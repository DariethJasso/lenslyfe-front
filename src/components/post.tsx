import { Avatar } from '@mui/material'
import React from 'react'
import { IconBookmark, IconDots, IconHeart, IconMessage2 } from '@tabler/icons-react'
const Post = () => {
  return (
    <section className='w-[100%] sm:w-[75%] md:w-[70% lg:w-[50%] p-2 space-y-2'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Avatar sx={{width: 40, height: 40}}/>
                <p className='text-white'>Username</p>
            </div>
            <IconDots className='text-white'/>
        </div>
       <img className='max-w-[330px] md:max-h-[600px] md:max-w-[600px] xl:max-h-[500px] xl:max-w-[400px]' src='https://picsum.photos/400' alt="" />
       <div className='flex justify-start items-center text-white gap-4'>
            <IconHeart className='w-[30px] h-[30px]'/>
            <IconMessage2 className='w-[30px] h-[30px]'/>
            <IconBookmark className='w-[30px] h-[30px]'/>
       </div>
       <article>
          <p className='text-white text-[13px]'><span className='font-bold'>Username </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos. </p>
       </article>
    </section>
  )
}

export default Post