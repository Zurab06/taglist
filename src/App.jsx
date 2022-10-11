import React, { useState } from "react";
import './App.css'
const App = () => {
  const [tags, setTags] = useState([{id: 9, text: "EEeee"}]);
  const [text,setText] = useState('')


const handleRemove = (id)=> {
  setTags(tags.filter(item => item.id !== id ))
}
const handleAdd = ()=> {
  if(text){  setTags([...tags, {id:Math.random(1,1000),text:text}])
  setText('')}

}
  return (
    <>
    <div className="app">
      <input className="inp" type="text" onChange={(e) => setText(e.target.value)}
       value={text}/>
      <button className="btn-add" onClick={handleAdd}>add</button>
    </div>
    <div className="tagList">
      {tags.map(item=>{
        return (<div className="tag"  key={item.id}>
       <div className="mainbtn"> <span className="text">{item.text}</span>
        <button className="delbtn" onClick={()=>{handleRemove(item.id)}}>x</button>
        </div>
        </div>)
      })}
    </div>
    </> 
  );
};

export default App;
