import React, { useEffect, useRef } from 'react'
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
import { newPost } from '@/store/services'
import axios from 'axios'
const DrawerNewPost = ({triger}:any) => {

const persistedStateJSON = localStorage.getItem('persist:root');
const persistedState = JSON.parse(persistedStateJSON || '{}');
const userId = persistedState && persistedState.auth ? JSON.parse(persistedState.auth).user?.id : null;

    const [formData, setFormData] = React.useState({
        text: '',
        url_img: '',
        user_id: 0
    })

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
            user_id: userId
        })
    }

    const handleSubmit = async () => {
        console.log(formData)
        await newPost({formData});

    }

    const [urlImg, setUrlImg] = React.useState('');

    const changeUploadedImage = async (e:any) => {
        const file = e.target.files[0];

        console.log(e)

        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset','posts_img')

        const response = await axios.post('https://api.cloudinary.com/v1_1/dv6jkcl0z/image/upload', data);
        setFormData({
            ...formData,
            url_img: response.data.secure_url
            
        })
        console.log(response.data)
        setUrlImg(response.data.secure_url);
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
                                {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="url_img" className='text-white'>UrlImage</Label>
                                    <Input type="text" id="url_img" placeholder="Url Image" onChange={handleChange} />
                                </div> */}
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="url_img" className='text-white'>Image's'</Label>
                                    <Input type="file" accept='image/*' id="url_img" placeholder="Url Image" onChange={changeUploadedImage} />
                                </div>
                                {
                                    urlImg && <img src={urlImg} alt="" />
                                }
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