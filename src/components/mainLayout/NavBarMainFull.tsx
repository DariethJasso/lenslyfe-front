import { FavoriteBorderOutlined, HomeOutlined, MessageOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import {  IconButton } from '@mui/material'
import { AvatarToltip } from './AvatarToltip'

const NavBarMainFull = () => {
    const links = [
        {
            name: "Home",
            link: "/main",
            icon: <HomeOutlined sx={{color:'white', width:30,height:30}} />
        },
        {
            name: "Explore",
            link: "/explore",
            icon: <SearchOutlined sx={{color:'white', width:30,height:30}} />
        },
        {
            name: "Message",
            link: "/message",
            icon: <MessageOutlined sx={{color:'white', width:30,height:30}} />
        },
        {
            name:"Notifications",
            link: "/notification",
            icon : <FavoriteBorderOutlined sx={{color:'white', width:30,height:30}}/>
        },
        {
            name: "Profile",
            link: "/profile",
            icon :<AvatarToltip border={false}/>
        }
    ]
  return (
    <nav className='flex flex-col items-center gap-3 xl:items-start'>
        {links.map((link) => (
            <Link key={link.name} to={link.link}><p className='text-white flex items-center gap-2 '>{link.icon}<span className='hidden xl:flex xl:font-bold'>{link.name}</span></p></Link>
        ))}
        
    </nav>
  )
}

export default NavBarMainFull