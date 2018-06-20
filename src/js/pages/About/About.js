import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

class About extends Component {
	render() {
		const { match } = this.props;
		const { path } = match;
		console.log('About：', match);
		return (
			<Fragment>
				<Header>
					<Navigation path={path}/>
				</Header>
				<h1>About Page</h1>
			</Fragment>);
	}
}

export default About;
