import React from 'react'
import './Sidebar.css';
import { MdAccountCircle } from "react-icons/md";

function SideBar() {

  const recentItem = (topic) => {

    return(
    <div className='sidebar_recentItem'>
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  }
  return (
    <div className='sidebar'>
       <div className='sidebar_top'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHwIfa83tAQNOjJdd9LRhjc9LNakC8v3jZnnOWc1dil6XHmsEdaab8z7DYAhcTiT3DGw&usqp=CAU' alt=''/>
        <MdAccountCircle className='sidebar_avatar' />
        <h3>Shivang Tripthi</h3>
        <h5>shivangtripathi@gmail.com</h5>
       </div>

       <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidbar_statNumber'>2,538</p>
          </div>
        <div className='sidebar_stat'>
        <p>Views on post</p>
          <p className='sidbar_statNumber'>2,488</p>
        </div>
       </div>

       <div className='sidebar_bottom'>
        <p>Recent</p>
  
        {recentItem("reactjs")}
        {recentItem("software")}
        {recentItem("developer")}
        {recentItem("programmimg")}
        {recentItem("devops")}
             
       </div>
    </div>
  )
}

export default SideBar