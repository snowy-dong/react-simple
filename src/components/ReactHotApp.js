'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { RouteTransition } from 'react-router-transition';
import { Navbar, Nav, NavItem, NavDropdown, FormGroup, FormControl, MenuItem, Button, Pagination, Table, Jumbotron, Modal, Popover, Tooltip, OverlayTrigger, ListGroup, ListGroupItem } from 'react-bootstrap';

// CSS
require('normalize.css');
require('../styles/main.css');
require('../styles/bootstrap/dist/css/bootstrap.css');
const App = React.createClass({
render() {
    return (
  <div>
    <div className="Sidebar">
      <Navbar inverse >
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/" activeClassName="active" className="link">Home</IndexLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#/About">About</NavItem>
          <NavItem eventKey={2} href="#/NoMatch">NoMatch</NavItem>
          <NavItem eventKey={2} href="#/Users">Users</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={'/Users'}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
       <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar>
    </div>
    <RouteTransition className=" transition-wrapper"
      pathname={this.props.location.pathname}
      atEnter={{ translateX: 100 }}
      atLeave={{ translateX: -100 }}
      atActive={{ translateX: 0 }}
      mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
      >
        {this.props.children}
    </RouteTransition>
  </div>
    );
  }

});






// Home
const Home = React.createClass({
  ToggleText: function(){
     this.setState({title: !this.state.title});
  },
  getInitialState: function () {
    return {
      title: false,
      showModal: false
    };
  },
   close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
render() {
   var text = this.state.title ? 'Hello world' : 'Hello React';
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <div className="lorem" >
        <h1>Home</h1>
          <Jumbotron className="row">
             <RouteTransition className=" transition-wrapper"
              pathname={this.props.location.pathname}
              atEnter={{ translateY: 400 }}
              atLeave={{ translateY: -400 }}
              atActive={{ translateY: 0 }}
              mapStyles={styles => ({ transform: `translatey(${styles.translateY}%)` })}
              >
              <h1>{text}</h1>
              <p>React & React-router & React-router-transition & React-bootstrap</p>
            </RouteTransition>
            <p><Button bsStyle="primary" onClick={this.ToggleText}>toggle text</Button></p>
            <Button className="pull-right"
              bsStyle="primary"
              bsSize="large"
              onClick={this.open}
            >
             Open modal
            </Button>
          </Jumbotron>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>
            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
            <hr />
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

// About
const About = React.createClass({
render() {
    return (
      <div className="lorem" >
        <h1>About</h1>
        <ListGroup>
          <ListGroupItem bsStyle="success">Success</ListGroupItem>
          <ListGroupItem bsStyle="info">Info</ListGroupItem>
          <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
          <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
});
const NoMatch = React.createClass({
render() {
    return (
      <div className="lorem" >
        <h1>NoMatch</h1>
        <div className="progress">
        <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
          <span className="sr-only">40% Complete (success)</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
          <span className="sr-only">20% Complete</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
          <span className="sr-only">60% Complete (warning)</span>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
          <span className="sr-only">80% Complete (danger)</span>
        </div>
      </div>
      </div>
    );
  }
});
//Users
const Users = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },
  render() {
    return (
      <div className="lorem" >
        <h1>Users</h1>
      <Table responsive hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@TwBootstrap</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    </div>
    );
  }
});


ReactDom.render((
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="users" component={Users}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
  ), document.getElementById('content')); // jshint ignore:line

