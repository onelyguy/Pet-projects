import React from "react";
import { questions } from "../questions";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate()
  const uniqueSubjects = Array.from(new Set(questions.map(item => item.subject)));

  const handleClick = (subject) => {
    navigate(`/game?subject=${subject}`)
  }

  return (
    <div className="result">
      <h1>Давайте проверим ваши школьные знания по ...</h1>
      <ul>
        {uniqueSubjects.map((subject) =>
          <li onClick={() => handleClick(subject)} key={subject}>
            {subject}
          </li>)}
      </ul>
    </div>
  )
};

export default MainPage;