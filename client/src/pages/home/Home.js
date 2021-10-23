// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// import "./home.css";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";

// export default function Home() {
//   const[posts, setPosts]=useState([]);

//   useEffect(() => {
//    const fetchPosts = async ()=>{
//     const res= await axios.get("/posts")
//     console.log(res);
//    }
// fetchPosts();



   
//   }, [])


//   return (
//     <>
//       <Header/>
//       <div className="home">
//         <Posts />
//         <Sidebar />
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
