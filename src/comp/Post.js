import React from 'react';
import {CurPost} from "./CurPost";
const Post = ({post,setSelPost}) => {

  const  {id, title} = post;
    return (
        <div>
            <div>  id: {id}</div>
            <div>  title: {title}</div>
            <button onClick={()=>{setSelPost(post)}}>Select this post for details</button>
        </div>
    );
};

export {Post};