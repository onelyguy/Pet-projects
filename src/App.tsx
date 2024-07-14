import './App.scss';
import React from 'react';
import Success from './components/Success.tsx';
import Users from './components/Users/index.tsx';
import { IUser } from './types/types.tsx';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [invites, setInvites] = React.useState<number[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [success, setSuccess] = React.useState<boolean>(false);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://reqres.in/api/users');
        const json = await res.json();
        setUsers(json.data);
      } catch (e) {
        console.error('Error:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickInviteSend = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickInviteSend={onClickInviteSend}
        />
      )}
    </div>
  );
}

export default App;
