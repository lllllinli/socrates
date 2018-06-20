import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

class Home extends Component {
	render() {
		const { path } = this.props.match;
		return (
			<Fragment>
				<Header>
					<Navigation path={path} />
				</Header>
				<main role="main" className="inner cover">
					<h1 className="cover-heading">Cover your page.</h1>
					<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit
						the text, and add your own fullscreen background photo to make it your own.</p>
					<p className="lead">
						<a href="#" className="btn btn-lg btn-secondary">Learn more</a>
					</p>
				</main>
			</Fragment>
		);
	}
}

export default Home;

