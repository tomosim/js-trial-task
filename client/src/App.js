import { useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import UsersOnPage from './Components/UsersOnPage';

function App() {
  const [userCount, setUserCount] = useState(10)
  return (
    <>
      <UsersOnPage setUserCount={setUserCount} />
      <UserList userCount={userCount} />
    </>
  );
}

export default App;
