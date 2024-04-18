import React from 'react'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import DrawerProfileOptions from '../profile/DrawerProfileOptions';
import { useDataUser } from '../../hook/useDataUser';

export const AppBarProfile = () => {
    const {users,logout} = useDataUser();
    const [open, setOpen] = React.useState(false);

    

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <div className='h-[50px] border-b border-gray-300'>
        <div className='flex items-center justify-between h-full px-3'>
        <p className='text-white'>@{users?.username}</p>
        <div className='flex gap-3 items-center text-white'>
            <AddBoxOutlinedIcon />
            <IconButton onClick={handleDrawerOpen}>
                <MenuOutlinedIcon sx={{ color: 'white' }}  />
            </IconButton>
        </div>
    </div>
    <DrawerProfileOptions open={open} setOpen={setOpen} logout={logout} />
    </div>
  )
}
