import React from 'react'
import './HeaderOption.css'
// import { MdAccountCircle } from "react-icons/md";
import { Avatar } from '@mui/material';
// import { HiMiniUserCircle } from "react-icons/hi2";

function HeaderOption({Icon, title, avatar}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption_icon'/>}
        {avatar &&  <Avatar className="headerOption_icon" src={avatar}/> }
        <h3 className='headerOption_title'>{title}</h3>
       
    </div>
  )
}

export default HeaderOption