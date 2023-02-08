import React from 'react';
import {CurPost} from "./CurPost";
const Post = ({post}) => {
  const  {id, title} = post;
    return (
        <div>
            <div>  id: {id}</div>
            <div>  title: {title}</div>
            <button onClick={CurPost(id) }>Select</button>
        </div>
    );
};

export {Post};