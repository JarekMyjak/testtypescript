import React, { FC, useState } from 'react';
import './App.css';
import {Circle} from './Circle'
import { hslFromDeg } from "./hslColorHelper";
import { v4 as uuidv4 } from 'uuid';


type CircleType = {
  key: string,
  text: string,
  color?: string
}

const App:FC = () => {

  const [CircleList, setCircleList] = useState(Array<CircleType>());
  const [NextColorDeg, setNextColorDeg] = useState(0)

  const handleAddCircle = () => {
    const nextCircle = {
      key: uuidv4(),
      text: "lorem ipsum",
      color: hslFromDeg(NextColorDeg)
    }
    setNextColorDeg((NextColorDeg+10));
    setCircleList([...CircleList, nextCircle]);
  }

  const handleDeleteCircle = () => {
    const newList = CircleList.slice(0,-1);
    setCircleList(newList);
  }
  
  return (
    <div className="App">
      <div className="buttonContainer">
        <button onClick={handleAddCircle}>dodaj nowe kółko</button>
        <button onClick={handleDeleteCircle}>usuń ostatnie kółko</button>
      </div>
      <div className="circleContainer">
        {CircleList.map((circle) => <Circle key={circle.key} color={circle.color}>{circle.text}</Circle>)}
      </div>
    </div>
  );
}

export default App;
