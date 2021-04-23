import React from "react";
import s from "./Posts.module.css"

const Posts = () => {
    return (
            <div className={s.item}>
                <img src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" alt=""/>
                My post 1
               <div> <span>like</span></div>
            </div>
    )
}

export default Posts;