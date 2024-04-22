import React from 'react'
import { Link } from 'react-router-dom'
import { AvatarToltip } from './AvatarToltip';
import { IconCameraPlus, IconHome, IconHomeFilled, IconSearch } from '@tabler/icons-react';
const NavBarMainMobile = () => {
    const pathname = window.location.pathname;
    const style = 
    {
        width: 30,
        height: 30
    }
    const links = [
        {
            name: "Home",
            link: "/main",
            icon: pathname === "/main" ? <IconHomeFilled style={style}/> : <IconHome style={style}/>
        },
        {
            name: "Explore",
            link: "/explore",
            icon: <IconSearch style={style}/>
        },
        {
            name: "New Post",
            link: "/newpost",
            icon: <IconCameraPlus style={style}/>
        },
        {
            name: "Profile",
            link: "/profile",
            icon : pathname === "/profile" ? <AvatarToltip border={true}/> : <AvatarToltip border={false}/>
        }
    ]
  return (
    <nav className='flex justify-evenly items-center w-full h-full'>
        {links.map((link) => (
            <Link key={link.name} to={link.link}><p className='text-white '>{link.icon}</p></Link>
        ))}
    </nav>
  )
}

export default NavBarMainMobile