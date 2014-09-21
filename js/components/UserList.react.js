/** @jsx React.DOM */


var React = require('react');
var User = require('./User.react');

var UserList = React.createClass({
	render: function() {
		var that = this;
		var userNodes = this.props.users.map(function(user) {
			<User displayName={user.displayName} profilePhoto={user.profilePhoto} xp={user.xp} editable={user === that.props.userId} />
		});
		return (
			<section>
				{userNodes}
			</section>
		);
	}
});

module.exports = User;