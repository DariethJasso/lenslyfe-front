import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Home } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { AvatarToltip } from './AvatarToltip';
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
            icon: pathname === "/main" ? <Home sx={style}/> : <HomeOutlinedIcon sx={style}/>
        },
        {
            name: "Explore",
            link: "/explore",
            icon: <SearchOutlinedIcon sx={style}/>
        },
        {
            name: "New Post",
            link: "/newpost",
            icon: <AddAPhotoOutlinedIcon    sx={style}/>
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
            <Link to={link.link}><p className='text-white '>{link.icon}</p></Link>
        ))}
    </nav>
  )
}

export default NavBarMainMobile