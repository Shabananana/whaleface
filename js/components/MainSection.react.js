/** @jsx React.DOM */

var React = require('react');
var UserList = require('./UserList.react');

var MainSection = React.createClass({
	render: function() {
		return (
			<main>
				<UserList users={this.props.users} userId={this.props.userId} />
			</main>
		);
	}
});

module.exports = MainSection;