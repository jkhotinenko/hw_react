import {axiosServ} from "./axiosServ";

const postsServ={
    getAll:()=>axiosServ.get(`/posts` ),
    getById:(id)=>axiosServ(`/posts/${id}`)
}

export {postsServ}