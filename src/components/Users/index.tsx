import React from 'react';
import { Skeleton } from './Skeleton.tsx';
import User from './User.tsx';
import { IUser } from '../../types/types.tsx';

interface IUsersProps {
  items: IUser[];
  isLoading: boolean;
  searchValue: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invites: number[];
  onClickInvite: (id: number) => void;
  onClickInviteSend: () => void;
}

const Users: React.FC<IUsersProps> = ({
  items,
  isLoading,
  searchValue,
  onChangeValue,
  invites,
  onClickInvite,
  onClickInviteSend,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeValue}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((obj) => {
              const fullName = `${obj.first_name.toLowerCase()} ${obj.last_name.toLowerCase()}`;
              const reverseFullName = `${obj.last_name.toLowerCase()} ${obj.first_name.toLowerCase()}`;
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                reverseFullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj) => (
              <User
                key={obj.id}
                {...obj}
                isInvited={invites.includes(obj.id)}
                onClickInvite={onClickInvite}
              />
            ))}
        </ul>
      )}
      <button
        disabled={invites.length === 0}
        onClick={onClickInviteSend}
        className="send-invite-btn"
      >
        Отправить приглашение
      </button>
      {/* либо же
      {invites.length > 0 && (
        <button onClick={onClickInviteSend} className="send-invite-btn">
          Отправить приглашение
        </button>
      )} */}
    </>
  );
};

export default Users;
