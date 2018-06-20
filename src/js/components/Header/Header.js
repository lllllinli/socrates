import React, { Component } from 'react';

class Header extends Component{
	render() {
		return (
			<header className="masthead mb-auto">
				<div className="inner">
					<h3 className="masthead-brand">Socrates</h3>
					{this.props.children}
				</div>
			</header>
		);
	}
}

export default Header;
