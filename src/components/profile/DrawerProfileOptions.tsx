import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const drawerWidth = 240;

const options1 = [
    {
        name: 'Logout',
        icon: <LogoutOutlinedIcon />,
    }
]


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  backgroundColor: 'black',
}));

export default function DrawerProfileOptions({open,setOpen,logout}:{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>,logout:() => void}) {

  
  

  return (
    <Box sx={{ display: 'flex',backgroundColor: 'black' }}>
      <CssBaseline />
      <Drawer
        sx={{
        backgroundColor: 'black',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader >
          <IconButton >
            <ChevronLeftIcon sx={{ color: 'white' }} onClick={() => setOpen(false)} />
          </IconButton>
          <p className='text-white font-bold'>Settings and activity</p>
        </DrawerHeader>
        <Divider />
        <List className='bg-black'>
          {options1.map((option) => (
            <ListItem key={option.name} disablePadding className='h-[20px]'>
              <ListItemButton onClick={ () => logout()}>
                <ListItemIcon sx={{ color: 'red' }}>
                  {option.icon}
                </ListItemIcon>
                <ListItemText sx={{ color: 'red' }} primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
      
    </Box>
  );
}
