import { useState } from "react";
import PostList from "../PostList/PostList";
import "./posts.css"

const Posts = ({posts}) => {
    return ( 
        <div className="posts__container container">
            {posts.map((posts) => (
                <PostList  post = {posts} key= {posts.id} />
            ))}
        </div>
     );
}
 
export default Posts;