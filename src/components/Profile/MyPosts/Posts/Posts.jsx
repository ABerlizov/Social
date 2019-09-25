import React from 'react';
import s from "./Posts.module.css";



const Posts = (props) => {
    return(
      <div className={s.item}>
                  <img src="https://avatarko.ru/img/avatar/23/fantastika_drakon_22492.jpg" alt="" />
                  { props.message }
                  <div>
                 
                    <span> 
                       {props.like}Like
                    </span>
                  </div>
                </div>
                

    )
}
export default Posts;