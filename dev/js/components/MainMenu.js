/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var MainMenuItem = require("./MainMenuItem.js");

var MainMenu = React.createClass({

	getInitialState: function() {
		return {
			mainMenuItemSelected: "About"
		}
	},

	selectMenuItem : function(name) {
		this.setState({mainMenuItemSelected: name});
	},

	render: function() {
		var that = this;
		var index = 0;
		var items = this.props.mainMenuItems.map(function(item) {
			return (
				<MainMenuItem key={index++} name={item} onSelectChange={that.selectMenuItem} 
					selected={that.state.mainMenuItemSelected} />
			);
		});

		return (
			<div className="main-menu">
				{items}
			</div>
		)
	}

});

module.exports = MainMenu;
