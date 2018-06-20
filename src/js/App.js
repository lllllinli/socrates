import React, { Component, Fragment } from 'react';
import {polyfill} from 'react-lifecycles-compat';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Topics from './pages/Topics/Topics';
import Todo from './pages/Todo/Todo';

import Footer from './components/Footer/Footer';






class App extends Component{
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('--- App : getDerivedStateFromProps');
	// }
	// static getSnapshotBeforeUpdate(prevProps, prevState) {
	// 	console.log('--- App : getSnapshotBeforeUpdate');
	// }
	state = {
		isTest: false,
	}
	constructor(props) {
		super(props);
		console.log('--- App : constructor ---');
	}
	componentDidMount() {
		console.log('--- App : componentDidMount ---');
		console.log(this.state.isTest);
	}
	componentWillUnmount() {
		console.log('--- App : componentWillUnmount ---');
	}
	render() {
		console.log('--- App : render ---');
		return (
			<Router>
				<Fragment>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/topics" component={Topics}/>
					<Route path="/todo" component={Todo}/>
					<Footer />
				</Fragment>
			</Router>
		);
	}
}

export default App
