import React from 'react'
import PostProfile from './PostProfile'

const MenuOptions = () => {
    const [option,setOption] = React.useState('posts')
  return (
    <>
    <div className='flex w-[100%]'>
        <button className={`bg-black text-white text-[13px] font-bold py-2 px-4 rounded-lg w-[50%] ${option === 'posts' ? 'bg-gray-500/30 text-black' : ''}`} onClick={() => setOption('posts')}>Posts</button>
        <button className={`bg-black text-white text-[13px] font-bold py-2 px-4 rounded-lg w-[50%] ${option === 'media' ? 'bg-gray-500/30 text-black text-black' : ''}`} onClick={() => setOption('media')}>Media</button>
    </div>
    {
        option === 'posts' ? <PostProfile /> : null
    }
    </>
  )
}

export default MenuOptions