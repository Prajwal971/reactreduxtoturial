import React from 'react'
import Login from './components/Login';
import './App.css'
import { useSelector } from 'react-redux';
import { selectuser } from './features/userSlice';
import Logout from './components/Logout';

function App() {
  const user = useSelector(selectuser);
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;