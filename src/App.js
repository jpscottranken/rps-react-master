import "./App.css";

import { useState } from "react";
import { useEffect } from "react";
import logo from "./assets/rpsOriginal.gif";

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    setTimeout(() => {
      getComputerChoice();
    }, 3000);
  };

  const getComputerChoice = () => {
    const rand = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(rand);
    //determineWinner();
  };

  useEffect(() => {
    determineWinner();
  }, [computerChoice, userChoice]);

  const determineWinner = () => {
    switch (userChoice + computerChoice) {
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("Draw!");
        setDraws(draws + 1);
        break;

      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("User Wins!");
        setUserWins(userWins + 1);
        break;

      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("Computer Wins!");
        setComputerWins(computerWins + 1);
        break;
    }
  };

  return (
    <div class='centered'>
      <h1>Let's Play Rock, Paper, Scissors!!!</h1>
      <img src={logo} alt='Rock Paper Scissors GIF' />
      <br />
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h2>User Chose: {userChoice}</h2>
      <h2>Computer Chose: {computerChoice}</h2>
      <h2>Result: {result}</h2>
      <h2>User Wins: {userWins}</h2>
      <h2>Computer Wins: {computerWins}</h2>
      <h2>Draws: {draws}</h2>
    </div>
  );
};

export default App;
