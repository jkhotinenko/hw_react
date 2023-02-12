import React, {useEffect, useState} from 'react';
import {postsServ} from "../serv/postsServ";
import {Post} from "./Post";
import {CPost} from "./CPost";


const Posts = () => {
    const [posts,setPosts]= useState([])
    const [selPost,setSelPost]=useState(null)

    useEffect(()=>{
            postsServ.getAll().then(({data})=>setPosts([...data]))
        },[]
    )
    return (
        <div>
            {selPost && <h2>Selected post</h2>}
            {selPost && <CPost post={selPost}/>}
            <hr/>
            <h2>All Posts</h2>
            {posts.map(post=><Post key={post.id} post={post} setSelPost={setSelPost}/>)}

        </div>
    );

};

export{Posts};