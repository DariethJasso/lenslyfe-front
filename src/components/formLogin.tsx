'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment,FormControl, IconButton, InputLabel, OutlinedInput, TextField,Alert } from '@mui/material';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { loginUser } from '../store/authSlice';
import { useSelector } from 'react-redux';

export default function FormLogin(){

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isLoging} = useSelector((state:RootState) => state.auth)

  //alerts
  const [alert, setAlert] = React.useState<React.ReactNode | null>(null);


    useEffect(() => {
      if(isLoging){
        navigate('/main')
      }
    },[isLoging])

    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const [showPassword, setShowPassword] = React.useState(false);
    
     const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    };


    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        dispatch(loginUser(data)).then((response) => {
            if(response.type === 'auth/loginUser/fulfilled'){
                navigate('/main');
            }else{
              setAlert(<Alert severity="error">Error al iniciar sesión</Alert>);
            }
        })
        
    })

    return (
      <div className='flex flex-col gap-3'>
      <h1 className='text-[25px] font-bold'>Login</h1>
      <TextField  {...register("email",{ required: true })} id="outlined-basic" label="Email" variant="outlined" />
      {
          errors.email && <p className='text-red-500 text-xs'>Email is required</p>
      }
      <FormControl sx={{ m: 1 }} variant="outlined">
<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
{...register("password", { required: true })}
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
          errors.password && <p className='text-red-500 text-xs'>Password is required</p>
      }
        
        {alert && alert}
                    <button onClick={onSubmit}  className='bg-black text-white w-[100px] rounded-xl h-[40px]'>Login</button>
                    <p className='text-[13px]'>You dont have an account?<Link className='font-bold' to="/register">Register</Link></p>
                </div>
    )
}