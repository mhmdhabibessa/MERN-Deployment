import logo from './logo.svg';
import './App.css';
import React from "react";
import Chatapp from './components/Chatapp'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
// import Main from './Main'
import Main from './views/Main';
import Update from './views/Update';
import Home from './components/Home'
// import './App.css'


import CreateProject from './components/CreateProject'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import UserList from './components/UersList';
function App() {
  return (
    <div className="App">
      {/* <Routes> 
          <Route path="/" element={<Main/>} />
          <Route path="/users/:id/edit" element={<Update/>}/>
      </Routes> */}
      {/* <Chatapp /> */}
      <Routes>
        {/* <CreateProject path="/new" /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/getallusers" element={<UserList />} />
        <Route path="/new" element={<CreateProject />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        {/* <Dashboard path="/" /> */}
      </Routes>
    </div>
  );
}

export default App;
