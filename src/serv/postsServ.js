import {axiosServ} from "./axiosServ";

const postsServ={
    getAll:()=>axiosServ.get(`/posts` )
}

export {postsServ}