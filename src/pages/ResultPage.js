import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResultPage = ({ correct, amountOfQuestions }) => {
  // const location = useLocation();
  // const amountOfQuestions = new URLSearchParams(location.search).get('outOf');
  // const [correctAnswers, setCorrectAnswers] = React.useState(new URLSearchParams(location.search).get('correct'));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='result'>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Result" />
      <h2>Вы отгадали {correct} из {amountOfQuestions}</h2>
      <Link to='/'>
        <button>
          <span>Выйти</span>
        </button>
      </Link>
    </div>
  );
}

export default ResultPage;