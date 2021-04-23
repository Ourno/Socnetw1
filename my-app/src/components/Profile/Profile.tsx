import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={s.profile}>
            <div>
                <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" alt=""/>
            </div>
            <div> ava +descr</div>
            <MyPosts/>
        </div>

    )
}

export default Profile;