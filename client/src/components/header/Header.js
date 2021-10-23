import React from 'react';
import "./header.css"

export default function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm">Blog</span>
               <span className="headerTitleLg">Share Your Stories With Us!</span>
           </div>
           <img className="headerImg" src="https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?cs=srgb&dl=pexels-burst-545042.jpg&fm=jpg" alt=""></img>
        </div>
    )
}
