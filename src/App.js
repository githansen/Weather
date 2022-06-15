import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header";
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";
import {Weather} from "./Components/Weather";
import {Search} from "./Components/Search";




function App() {

  return (
    <div className="App">
      <Header/>
        <Container fluid>
        <Search/>
        </Container>
    </div>
  );
}

export default App;
