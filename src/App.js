import React from 'react';
import logo from './logo.svg';
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import { Nav, NavItem, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/Home';
import TodoIndex from './screens/TodoIndex';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              <NavLink className="nav-link" activeClassName="active" exact to="/todos">Todos</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <div className="ui two item menu">
          </div>
          <Route exact path="/" component={ Home }/>
          <Route path="/todos" component={ TodoIndex }/>
          {/*<Route path="/contacts/edit/:_id" component={ContactFormPage}/>*/}
        </Container>
      </Router>
    </div>
  );
}

export default App;
