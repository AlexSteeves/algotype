import React from "react";
import GeneratedWords from "./Components/GeneratedWords";
import Restart from "./Components/Restart";

import Results from "./Components/Results";
import TypedWords from "./Components/TypedWords";
import useEngine from "./Hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const App = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();

  return (
    <>
      
      <CountdownTimer timeLeft={timeLeft} />
      <TextContainer>
        <GeneratedWords key={words} words={words} />

        <TypedWords
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </TextContainer>
      <Restart
        className={"mx-auto mt-10 text-col-200"}
        onRestart={restart}
      />
      <Results
        className="mt-10"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};

const TextContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className = "flex justify-center items-center ">
      <div className="relative text-3xl max-w-[80%] leading-relaxed break-all mt-3">
        {children}
      </div>
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-col-200 font-thin pl-8 lg:pl-32">Time: {timeLeft}</h2>;
};

export default App;
