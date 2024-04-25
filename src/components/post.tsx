import { Avatar } from '@mui/material'
import React from 'react'
import { IconBookmark, IconDots, IconHeart, IconMessage2 } from '@tabler/icons-react'
import { Post, User } from '@/lib/type'
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';




// Importa el locale español

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return formatDistanceToNow(date, { locale: enUS });
};


const Posts = ({post,user}:{post:Post,user:User}) => {
  return (
    <section className='w-[100%] sm:w-[75%] md:w-[70% lg:w-[50%] p-2 space-y-2'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Avatar sx={{width: 40, height: 40}} src={user.avatar}/>
                <p className='text-white'>{user.name}</p>
            </div>
            <IconDots className='text-white'/>
        </div>
       <img className='max-w-[330px] md:max-h-[600px] md:max-w-[600px] xl:max-h-[500px] xl:max-w-[400px]' src={post.url_img} alt="" />
       <div className='flex justify-start items-center text-white gap-4'>
            <IconHeart className='w-[30px] h-[30px]'/>
            <IconMessage2 className='w-[30px] h-[30px]'/>
            <IconBookmark className='w-[30px] h-[30px]'/>
       </div>
       <article >
          <p className='text-white text-[13px]'>{formatDate(post.created_at)} ago</p>
          <p className='text-white text-[13px]'><span className='font-bold'>{user.name} </span>{post.text}</p>
       </article>
    </section>
  )
}

export default Posts