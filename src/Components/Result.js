import React from "react";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
  
    <div className="score">Your memory is {((Number(score) / Number(12))*100).toFixed()} % accurate</div> 

    
     
    
    <button className="playBtn" onClick={playAgain}>
      playAgain!
    </button>
  </div>
);

export default Result;
