import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';


function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecord/>
            </div>
            <div className='widget_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )}
  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Linked react-clone", "Top news - 9099 readers")}
        {newsArticle("Tesla hits new Hights", "Top news - 8199 readers")}
        {newsArticle("remote-work, open source", "Top news - 7819 readers")}
        {newsArticle("Crypto falls down", "Top news - 7159 readers")}
        {newsArticle("plateform Engineering Vs devops", "Top news - 6190 readers")}
        {newsArticle("layoffs trends", "Top news - 5590 readers")}
    </div>
  )
}

export default Widgets