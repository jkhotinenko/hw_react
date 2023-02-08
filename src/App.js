
import './App.css';
import {Posts} from "./comp/Posts";
import {CurPost} from "./comp/CurPost";

function App() {
  return (
    <div className="App">
        <CurPost/>
        <hr />
       <Posts />
    </div>
  );
}

export default App;
