function FinishedScreen({ points, maxPossibelPoints, highscore, dispatch }) {
  const percentage = (points / maxPossibelPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossibelPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
