import React, { useEffect, useState } from "react";
import questions from "../Services/Data";

function Homepage() {
  const [usename, setUsename] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTicket, setShowTicket] = useState(false);
  const [ticket, setTicket] = useState(0);

  useEffect(() => {
    setUsename(prompt("please enter your name"));
  }, []);

  const handleAnswerOptionClick = answer => {
    if (answer.result) {
      setTicket(answer.result);
      setShowTicket(true);
      return;
    }
    setCurrentQuestion(answer.nextId);
  };

  return (
    <>
      <div className="header">
        <h2>Welcome to BVG.</h2>
        <h1>{usename}</h1>
        <h2>We will help you to find your right Ticket</h2>
      </div>
      <div className="app">
        {showTicket ? (
          <div className="ticket-section">You ticket {ticket}</div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(answerOption => (
                <button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Homepage;

