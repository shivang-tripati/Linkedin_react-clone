import React from 'react'
import './Header.css'
import { MdSearch, MdHome, MdGroup, MdChat, MdOutlineNotificationsNone} from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className='header'>

        <div className='header_left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>
            <div className='header_search'>
            <MdSearch/>
            <input type='text'/>
            </div>
        </div>

        
        <div className='header_right'>
            <HeaderOption Icon={MdHome} title="Home"/>  
            <HeaderOption Icon={MdGroup} title="My Network"/>
            <HeaderOption Icon={FaBriefcase} title="Jobs"/>
            <HeaderOption Icon={MdChat} title="Messaging"/>
            <HeaderOption Icon={MdOutlineNotificationsNone} title="Notification"/>
            <HeaderOption avatar="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=nMpH7tfH___WoQzbtoytLfYhwb3pgpDXXJyEHzwhgIM=" title='Me'/>
             
        </div>
    </div>
  )
}

export default Header