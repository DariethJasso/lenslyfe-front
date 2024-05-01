import React from 'react'
import InfoProfile from '../components/profile/InfoProfile'
import { useDataUser } from '../hook/useDataUser';
import { Separator } from '@/components/ui/separator';
import PostProfile from '@/components/profile/PostProfile';
import MenuOptions from '@/components/profile/MenuOptions';

const Profile = () => {
    const {users} = useDataUser();
  return (
    <main className='bg-black h-full md:w-[100%] '>
      <div>
        <InfoProfile user ={users} />
        <Separator className='my-1 ' />
        <MenuOptions />
      </div>
    </main>
  )
}

export default Profile