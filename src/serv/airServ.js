import {axiosServ} from "./axiosServ";

const airServ={
    getAll:()=>axiosServ.get(`/launches` )
}

export {airServ}