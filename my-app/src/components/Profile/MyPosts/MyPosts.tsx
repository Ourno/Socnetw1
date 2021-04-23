import React from "react";
import s from "./MyPosts.module.css"
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={s.profile}>
            <div>My post
                <div className={s.posts}>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;