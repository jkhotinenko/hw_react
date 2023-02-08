import React, {useEffect, useState} from 'react';
import {postsServ} from "../serv/postsServ";
import {CPost} from "./CPost";

const CurPost = (id) => {
    const [cpost,setCpost]= useState([])

    useEffect(()=>{
             postsServ.getById(id).then(value => value.data).then(value => setCpost(value))
        },[]
    )
    return (
        <div>
            {/*{posts.map(post=><Post key={post.id} post={post}/>)}*/}
            {cpost && <CPost key={id} post={cpost}/>}
        </div>
    );
};

export {
    CurPost
};