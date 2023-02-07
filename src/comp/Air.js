import React from 'react';

const Air = ({air}) => {
const {flight_number,mission_name,launch_year,links} = air;
 let nmn = (launch_year == 2020);

 if (!nmn) {

         return(
     <div>
         <div> id: {flight_number} </div>
         <div> mission_name: {mission_name} </div>
         <div> launch_year: {launch_year} </div>
         <div> start fly 2020 : {nmn ? 'true' : 'false'} </div>
        <div>image link : {links.mission_patch_small}</div>
         <img src={links.mission_patch_small}/>
         <hr/>
     </div>

         );
      };
};

export {Air};