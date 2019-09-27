import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img
                    src='http://cobomktg.com/wp-content/uploads/2017/03/cropped-creating-infographics-header-image.jpg'
                    alt='image'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>

    )
}
export default Profile;