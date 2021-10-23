// import React from 'react';
// import axios from "axios"
// import { useState , useEffect} from 'react';
// import "./sidebar.css"
// import { Link } from 'react-router-dom';

// export default function Sidebar() {
//     const [cats,SetCats] = useState([]);



//     useEffect(() => {
//     const getCats = async ()=>{
//         const res= await axios.get("/categories");
//         SetCats(res.data)
//     }
//         getCats();
//     }, [])


//     return (
//         <div className="sidebar">
//             <div className="sidebarItem">
// <span className="sidebarTitle">ABOUT ME</span>
// <img className="sidebarImg" src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg"></img>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
// incididunt ut labore et dolore magna aliqua. </p>
//             </div>
//             <div className="sidebarItem">
//             <span className="sidebarTitle">CATEGORIES</span>
//             <ul className="sidebarList">
//             {cats.map((c)=>(
//                 <Link to={`/?cat=${c.name}`} className="link">
//                 <li className="sidebarListItem">{c.name}</li>
//                 </Link>
               
//             ))}
                
//             </ul>
//             </div>

//             <div className="sidebarItem">
//             <span className="sidebarTitle">FOLLOW US</span>
//             <div className="sidebarSocial">
//             <i className="sidebarIcon fab fa-facebook-square"></i>
//             <i className="sidebarIcon fab fa-pinterest-square"></i>
//             <i className="sidebarIcon fab fa-twitter-square"></i>
//             <i className="sidebarIcon fab fa-instagram-square"></i>
//             </div>
//             </div>
//     </div>
//     )
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}