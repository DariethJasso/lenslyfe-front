'use client'
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    console.log(open)
    const Links =[
        {
            name: "Home",
            link:'/'
        },
        {
            name:"Categories",
            link:'/categories'         
        },
        {
            name:"Community",
            link:'/login'
        }
    ];

    return (
        <>
            <MenuIcon onClick={() => setOpen(!open)} className='sm:hidden' sx={{ color: 'white', fontSize: 30 }} />
            <nav className={`sm:flex sm:gap-3 sm:justify-center sm:items-center ${open ? " fixed right-0 top-[50px] z-10 flex flex-col items-center gap-3 rounded-md w-[250px] bg-white" : "hidden"}`}>
                {Links.map((link) => (
                    <Link className={`font-bold ${open ? "text-black" : "text-white"}`} key={link.name} to={link.link}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </>
    );
}
