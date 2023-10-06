
import React from 'react';
import { faker } from "@faker-js/faker";
import RestartButton from "./Components/RestartButton";
import GenerateWords from "./Components/GeneratedWords"


const words = faker.random.words(10);
const App = () =>{
  return (
    <>
    <CountdownTimer timeLeft={30} />
    <GeneratedWords words={words}/>
    <RestartButton 
      className = {"mx-auto mt-10 text-slate-500"}
      onRestart={()=> null}
    />
    
    </>
  );
}

const GeneratedWords = ({words}: {words:string }) =>{
  return <div className = "text-4xl text-center text-slate-500">{words}</div>
}
const CountdownTimer = ({ timeLeft}: { timeLeft: number }) => {
  return <h2 className = "textPrimary-400 font-medium">Time: {timeLeft}</h2>
}


export default App;
