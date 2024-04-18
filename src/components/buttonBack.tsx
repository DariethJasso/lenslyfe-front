'use client'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
export default function ButtonIcon() {

    return(
        <Link className='absolute top-1 left-1 bg-black text-white  rounded-lg p-1' to={'/'}>
            <p className='flex items-center font-bold' ><ArrowBackIcon/>Back</p>
        </Link>
    )
}