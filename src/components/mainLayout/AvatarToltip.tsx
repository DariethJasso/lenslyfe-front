import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';
import { Avatar } from '@mui/material';
import { useDataUser } from '../../hook/useDataUser';
export const AvatarToltip = ({border}:{border:boolean}) => {
  const {users} = useDataUser();
  return (
    
    <Tooltip title="Profile">
      <Avatar  src={users?.avatar}  sx={{width: 30, height: 30 }} className={`${border ? 'border-2' : ''}`}/>
    </Tooltip>
    
  
  )
}
