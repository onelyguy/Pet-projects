import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { questions } from "../questions";
import ResultPage from "./ResultPage";

const GamePage = () => {
  const [questionsBySubject, setQuestionsBySubject] = React.useState([]);
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false); // Состояние для активности кнопки

  // const navigate = useNavigate();
  const location = useLocation();
  const subject = new URLSearchParams(location.search).get("subject");

  React.useEffect(() => {
    const filteredQuestions = questions.filter(question => question.subject === subject);
    setQuestionsBySubject(filteredQuestions);
  }, [subject]);

  const onClickNextStep = (index) => {
    setSelectedVariant(index);

    if (index === questionsBySubject[step].correct)
      setCorrect((correct) => correct + 1);

    setIsButtonDisabled(true); // Делаем кнопку неактивной при клике

    setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      setSelectedVariant(null);
      setIsButtonDisabled(false); // Восстанавливаем активность кнопки после таймера
    }, 1000);
  };

  if (step === questionsBySubject.length) {
    return <ResultPage correct={correct} amountOfQuestions={questionsBySubject.length} />
  };
  // navigate(`/result?correct=${correct}&outOf=${questionsBySubject.length}`);

  if (questionsBySubject.length === 0) {
    return <div>Нет вопросов по этому предмету</div>;
  };

  const question = questionsBySubject[step];
  if (!question) {
    return <div>Вопрос не найден</div>;
  };

  const percentage = Math.round((step / questionsBySubject.length) * 100)

  return (
    <div className='game-wrapper'>
      <div className='progress'>
        <div className='progress__inner' style={{ width: `${percentage}%` }}></div>
      </div>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((variant, index) => (
          <li
            key={index}
            onClick={() => isButtonDisabled ? null : onClickNextStep(index)} // Добавляем проверку активности кнопки
            className={
              selectedVariant === null
                ? ""
                : index === selectedVariant
                  ? index === question.correct
                    ? "correct"
                    : "incorrect"
                  : index === question.correct
                    ? "correct"
                    : ""
            }
          >
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamePage;