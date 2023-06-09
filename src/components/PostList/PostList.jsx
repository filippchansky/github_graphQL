import { useEffect, useState } from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import Repository from "../repository/Repository";
import Button from "../UI/Btn/Button";
import "./postlist.css";

const PostList = ({ post}) => {
  
  const [modalPost, setModalPost] = useState(false)
  
  return (
    <div className="post__item">
      <div className="post__info" onClick = {()=> setModalPost(!modalPost)}>
        <p>
          Название: <strong>{post.name}</strong>
        </p>
      </div>
      <ModalWindow active = {modalPost} setActive = {setModalPost}><Repository post = {post}/></ModalWindow>
    </div>
  );
};

export default PostList;
