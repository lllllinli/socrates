import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component{
	render() {
		const path = this.props.path;
		console.log(path);
		return (
			<nav className="nav nav-masthead justify-content-center">
				<NavLink
					strict
					className="nav-link"
					activeClassName="active"
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					strict
					to="/about"
					className="nav-link"
					activeClassName="active"
				>
					About
				</NavLink>
				<NavLink
					strict
					to="/topics"
					className="nav-link"
					activeClassName="active"
				>
					Topics
				</NavLink>
			</nav>
		);
	}
}

export default Navigation;
