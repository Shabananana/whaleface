/** @jsx React.DOM */

var React = require('react');
var XPList = require('./XPList.react');

var User = React.createClass({
	getInitialState: function() {
		profilePhoto: this.props.profilePhoto,
		displayName: this.props.displayName
	},
	handleChange: function(event) {
		var state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state);
	},
	handleUpdate: function() {

	},
	render: function() {
		var formElement = (
			<div className='form-container'>
				<label>Display Name:</label>
				<input name='displayName' value={this.state.displayName} onChange={this.handleChange} />
				<label>Profile Photo Source:</label>
				<input name='profilePhoto' value={this.state.profilePhoto} onChange={this.handleChange} />
				<button>Update</button>
			</div>
		);
		var editableForm = this.props.editable ? formElement : null;
		return (
			<article>
				<img src={this.props.profilePhoto} />
				<strong>{this.props.displayName}</strong>
				{editableForm}
				<XPList xpList={this.props.xpList} />
			</article>
		);
	}
});

module.exports = User;