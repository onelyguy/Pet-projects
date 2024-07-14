import React from 'react';
import { Checkmark } from '../assets/Checkmark.tsx';

interface ICount {
  count: number;
}

const Success: React.FC<ICount> = ({ count }) => {
  return (
    <div className="success-block">
      <Checkmark width={120} height={120} />
      <h3>Успешно!</h3>
      <p>{count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};

export default Success;
