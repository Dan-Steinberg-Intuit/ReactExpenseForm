/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var MainMenuItem = React.createClass({

	// Note that the "MainMenu" object will set the initial "selected" state, since only it knows
	// which men items exist.

	OnSelectMenuItem : function(event) {
		event.preventDefault();

		// Change the "main menu item selected" state
		// This will also force a redraw of the virtual DOM
		this.props.onSelectChange(this.props.name);
	},

	render: function() {
		var isSelected = this.props.selected == this.props.name;
		var styleName = (isSelected) ? "main-menu-selected" : "main-menu-item";

		return (
				<a className={styleName}
					onClick={this.OnSelectMenuItem}
					href="">{this.props.name}</a>
		)
	}

});

module.exports = MainMenuItem;
