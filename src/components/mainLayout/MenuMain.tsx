import React from 'react'
import NavBarMainMobile from './NavBarMainMobile'
import { AppBarMobile } from './AppBarMobile'
import { AppBarProfile } from './AppBarProfile';
import NavBarMainFull from './NavBarMainFull';
import { CameraOutlined, MenuOutlined } from '@mui/icons-material';

const MenuMain = () => {
    const pathname = window.location.pathname;
  return (
    <div className='md:h-screen'>
        <div className='md:hidden'>

            <div className='bg-black w-full h-[50px]'>
                {pathname === '/main' ? <AppBarMobile /> : <AppBarProfile />}
            </div>
            
            <div className='bg-black w-full h-[50px] fixed bottom-0'>
                <NavBarMainMobile />
            </div>
        </div>
        <div className='hidden  bg-black md:min-w-5 md:w-[70px] h-[100%] md:flex flex-col items-center justify-around xl:w-[280px] xl:items-start xl:pl-8'>
            <p className='xl:hidden'><CameraOutlined sx={{color:'white', width:30,height:30}} /></p>
            <p className='text-white font-bold xl:flex hidden'>Lenslyfe</p>
            <NavBarMainFull />
            <div className='flex items-center gap-3'>
            <MenuOutlined sx={{color:'white', width:30,height:30}} />
            <p className='text-white font-bold hidden xl:flex'>Mas</p>
            </div>
        </div>
    </div>
  )
}

export default MenuMain