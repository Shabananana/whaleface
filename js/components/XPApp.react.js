/** @jsx React.DOM */

var React = require('react');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var UserStore = require('../stores/UserStore');

var getXpState = function() {
	return {
		users = UserStore.getAll(),
		userId = UserStore.getUserId()
	}
};

var XPApp = React.createClass({
	getIinitialState: function() {
		getXpState();
	}
	render: function() {
		return (
			<div>
				<Header />
				<MainSection users={this.state.users} userId={this.state.userId} />
				<Footer />
			</div>
		);
	}
});

module.exports = XPApp;
