import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const curruser = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate()

    if(curruser){
        navigate("/login")
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("user");
        navigate("/login")
      }


  return (
    <>
    <Button variant="contained" onClick={(e)=>{logout(e)}}>logout</Button>
    </>
  )
}

export default Logout