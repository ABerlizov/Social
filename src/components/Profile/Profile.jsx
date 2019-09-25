import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
    return(
  <div>
        <div>
                <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="avatar"/>
        </div>
           <div>
              Avatar+description
          </div> 
       <MyPosts />
  </div>
    )
}
export default Profile;