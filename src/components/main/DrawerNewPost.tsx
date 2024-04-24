import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconPhotoUp } from '@tabler/icons-react'
import { useDataUser } from '@/hook/useDataUser'
import { newPost } from '@/store/services'
const DrawerNewPost = ({triger}:any) => {
    const {users} = useDataUser();
    const [formData, setFormData] = React.useState({
        text: '',
        url_img: '',
        user_id: users?.id
    })

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async () => {
        console.log(formData)
        await newPost({formData});
    }
  return (
    
        <Drawer>
            <DrawerTrigger><p className='text-white'>{triger}</p></DrawerTrigger>
            <DrawerContent className="bg-black border-gray-500" >
                <DrawerHeader className="">
                    <DrawerTitle className='text-white'>New Post</DrawerTitle>
                    <DrawerDescription className="">
                        
                            <div className='space-y-4'>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="text" className='text-white'>Text</Label>
                                    <Input type="text" id="text" placeholder="Text" onChange={handleChange} />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="url_img" className='text-white'>UrlImage</Label>
                                    <Input type="text" id="url_img" placeholder="Url Image" onChange={handleChange} />
                                </div>
                            </div>
                            
                        
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <button onClick={handleSubmit} className='text-white border border-white rounded-xl flex items-center justify-center gap-2'><p>Post</p><IconPhotoUp style={{width:20,height:20}}/></button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

  )
}

export default DrawerNewPost