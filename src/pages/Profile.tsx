import React from 'react'
import InfoProfile from '../components/profile/InfoProfile'
import { useDataUser } from '../hook/useDataUser';
import { Divider } from '@mui/material';

const Profile = () => {
    const {users} = useDataUser();
  return (
    <main className='bg-black h-screen md:w-[100%] '>
      <div>
        <InfoProfile user ={users} />
        <Divider sx={{color: 'white'}} orientation='horizontal' flexItem variant='middle' />
      </div>
    </main>
  )
}

export default Profile