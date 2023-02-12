import React from 'react';
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