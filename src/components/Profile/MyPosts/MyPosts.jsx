import React from 'react';
import s from "./MyPosts.module.css";
import Posts from './Posts/Posts';

const MyPosts = () =>{
    return(
     <div>
              My Post
               <div>
                  New post           
               </div>
               <div className={s.posts}>
        <Posts message ="How are you?" like="15 " />
        <Posts message ="it's my first post" like="20 "/>
        <Posts />
        </div> 
        </div>      
    

    )
}
export default MyPosts;