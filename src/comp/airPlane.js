import React, {useEffect, useState} from 'react';
import {airServ} from "../serv/airServ";
import {Air} from "./Air";

const AirPlane = () => {
    const [airs,setAirs]= useState([])

    useEffect(()=>{
           airServ.getAll().then(({data})=>setAirs([...data]))
        },[]
    )
    return (
        <div>
            {airs.map(air=><Air key={Air.id} air={air}/>)}
        </div>
    );
};

export {AirPlane};