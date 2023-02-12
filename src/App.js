
import './App.css';
import {Posts} from "./comp/Posts";
import {CurPost} from "./comp/CurPost";
import {useState} from "react";

function App() {
    const [idm,setIDM]=useState()
  return (
      <div>
       <Posts />
    </div>
  );
}

export default App;
