import React from 'react'
import './Header.css'
import { MdSearch, MdHome, MdGroup, MdChat, MdOutlineNotificationsNone} from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../setup/firebase';
import { signOut } from 'firebase/auth';


function Header() {
  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    // auth.signOut();
    signOut(auth);
  }
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
            <HeaderOption avatar={true}
            title='Me'
            onClick={logoutOfApp}
            
            />
             
        </div>
    </div>
  )
}

export default Header