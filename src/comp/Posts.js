import React, {useEffect, useState} from 'react';
import {postsServ} from "../serv/postsServ";
import {Post} from "./Post";

const Posts = () => {
    const [posts,setPosts]= useState([])

    useEffect(()=>{
            postsServ.getAll().then(({data})=>setPosts([...data]))
        },[]
    )
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );

};

export{Posts};