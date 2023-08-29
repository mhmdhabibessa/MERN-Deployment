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
import CreateProject from './components/CreateProject'
import Dashboard from './components/Dashboard'
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
        <Route path="/new" element={<CreateProject />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Dashboard path="/" /> */}
      </Routes>
    </div>
  );
}

export default App;
