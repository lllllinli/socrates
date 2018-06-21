import React, { Component, Fragment } from 'react';
// import {polyfill} from 'react-lifecycles-compat';
// import { createStore } from 'redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Topics from './pages/Topics/Topics';
import Todo from './pages/Todo/Todo';

import Footer from './components/Footer/Footer';

// import SayApp from './reducers/reducers';
// import {say} from './actions/actions';
//
// const store = createStore(SayApp);


class App extends Component {
  constructor(props) {
    super(props);
    console.log('--- App : constructor ---');
  }
	state = { isTest: false }
	componentDidMount() {
	  console.log('--- App : componentDidMount ---');
	  console.log(this.state.isTest);
	}
	componentWillUnmount() {
	  console.log('--- App : componentWillUnmount ---');
	}
	handle = () => {
  	console.log(123);
	}
	render() {
	  console.log('--- App : render ---');
	  return (
		  <Router>
		    <Fragment>
		      <Route exact path="/" component={Home} />
		      <Route path="/about" component={About} />
		      <Route path="/topics" component={Topics} />
		      <Route path="/todo" component={Todo} />
		      <Footer />
		    </Fragment>
		  </Router>
	  );
	}
}

export default App;
