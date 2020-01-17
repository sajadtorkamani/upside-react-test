import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p>1. Create a blank React page containing the Upside logo in the top left corner, and a NavBar containing the following links: Get Posts, Create Team </p>
        <p>Use media queries to design the page to fit mobile (e.g. converting NavBar to a hamburger)</p>
        <p>Add a search box in which someone can start typing the name of a user. The list of users should be based on all attributes in the /users resource.</p>
        <p>Add a button with text "Get Users", which when clicked, retrieves full user information from /users and displays it in an elegant way on the page. If no text has been entered in the search box, then all users are retrieved.</p>
        <p>Click on Create Team</p>
        <p>Split page into LHS and RHS</p>
        <p>LHS: Add a search box in which someone can start typing the name of a user. The list of users should be based on all attributes in the /users resource.</p>
        <p>LHS: Add a button with text "Get Users", which when clicked, retrieves full user information from /users and displays it in an elegant way on the page. If no text has been entered in the search box, then all users are retrieved.</p>
        <p>RHS: Form with fields: Team Name and Team Members</p>
        <p>RHS: Elegant method of adding/removing users from team (e.g. buttons, drag, etc.)</p>
        <p>RHS: Form with fields: Team Name and Team Members</p>
        <p>Create team button - doesn't need to go anywhere (dummy response), but just give confirmation of creation</p>
        <p>Use button design and general page look and feel from Upside website</p>
        <p>Use Redux for state management</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
