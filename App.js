// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
 const[main,setMain]=useState('')
 const[val,setVal]=useState([])
//  var copyvalue;

 const inputhendler=(evt)=>{
  setMain(evt.target.value)
 }
 const inputchanger=()=>{
  let copyMain =[...val]
  copyMain.push(main)
  setVal(copyMain)
  console.log(val);
 }
  // const inputchanger=()=>{
  // setVal([main]);

    // console.log(main);
 

 return(
  <div classname="App">
    <input type="text" value={main} onChange={inputhendler}/>
    <button onClick={inputchanger}>submit</button>
    {
      val.map(val=>(
        <h1>{val}</h1>
  ))      
    }
    
  </div>
 )
}

export default App;
