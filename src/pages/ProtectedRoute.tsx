import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useNavigate } from 'react-router-dom'

type Props ={
    children:React.ReactNode
}
const ProtectedRoute = ({children}:Props) => {

    const {isLoging} = useSelector((state:RootState) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isLoging){
            navigate('/login')
        }
    },[isLoging])
  return (
    <>{children}</>
  )
}

export default ProtectedRoute