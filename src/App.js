import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from "./Login";

import { BrowserRouter, Switch, Route} from "react-router-dom"
import { useStateValue } from './StateProvider';
function App() {
  const [{ user },dispatch] = useStateValue();
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (
        <Login></Login>
      ) : (
        <>
          <Header></Header>
          <div className="app__body">
            <Sidebar></Sidebar>

            <Switch>
              <Route path="/room/:roomId">
                <Chat></Chat>
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
        </>
      )
      }     
      </BrowserRouter>
    </div>
  );
}

export default App;
