import React from 'react'
import './HeaderOption.css'
// import { MdAccountCircle } from "react-icons/md";
import { Avatar } from '@mui/material';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
// import { HiMiniUserCircle } from "react-icons/hi2";

function HeaderOption({Icon, title, avatar, onclick}) {
  const user = useSelector(selectUser);
  return (
    <div  className='headerOption' onClick={onclick} >
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar &&  <Avatar className="headerOption_icon">{user?.email[0]}</Avatar> }
        <h3 className='headerOption_title'>{title}</h3>
       
    </div>
  )
}

export default HeaderOption