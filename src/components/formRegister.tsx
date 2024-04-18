'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment,FormControl, IconButton, InputLabel, OutlinedInput, TextField, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { registerUser } from '../store/authSlice';
import { useSelector } from 'react-redux';

export default function FormRegister(){
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit, formState: { errors }} = useForm();

    //Alert

    const [alert, setAlert] = useState<React.ReactNode | null>(null); // Estado para la alerta

    //proteccion ruta
    const {isLoging} = useSelector((state:RootState) => state.auth)
    useEffect(() => {
      if(isLoging){
        navigate('/main')
      }
    },[isLoging])

    
    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        //Prueba peticion
        
        dispatch(registerUser(data)).then((response) => {
            if(response.type === 'auth/registerUser/fulfilled'){
                navigate('/main');
            }else{
              setAlert(<Alert severity="error">El correo ya esta en uso</Alert>);
            }
        })
    })

    const [showPassword, setShowPassword] = React.useState(false);

     const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    };

    return (
        <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] font-bold'>Register</h1>
                    <TextField {...register('name', { required: true })} id="outlined-basic" label="Name(s)" variant="outlined" />
                    {
                        errors.name && <p className='text-red-500 text-xs'>The name is required</p>
                    }
                    <TextField {...register('lastname', { required: true })} id="outlined-basic" label="LastName" variant="outlined" />
                    {
                        errors.lastName && <p className='text-red-500 text-xs'>The last name is required</p>
                    }
                    <TextField {...register('email', { required: true })} id="outlined-basic" label="Email" variant="outlined" />
                    {
                        errors.email && <p className='text-red-500 text-xs'>The email is required</p>
                    }
                    <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            {...register('password', { required: true })}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                    <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            {...register('password_confirmation', { required: true })}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {
            errors.password && <p className='text-red-500 text-xs'>The password is required</p>
        }
        
              {alert && alert}
                    <button onClick={onSubmit} className='bg-black text-white w-[100px] rounded-xl h-[40px]'>Register</button>
                    <p className='text-[13px]'>You already have an account?<Link className='font-bold' to={'/login'}>Login</Link></p>
                </div>
    )
}