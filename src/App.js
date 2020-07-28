import React from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import Switch from 'react-bootstrap/esm/Switch';
import Home from "./Home"
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <div className="copyRight">
        <h4> Powered by Ahmed Raza </h4>
        <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer" target="_blank">
          {" "}
          <h3> Copyright &copy; 2020 Ahmed Raza </h3>{" "}
        </a>
        <h3> All Right Reserved </h3>
      </div>
    </div>
  );
}

export default App;
