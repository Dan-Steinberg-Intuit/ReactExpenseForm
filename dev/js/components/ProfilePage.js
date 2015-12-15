/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var Profile = require("./Profile.js");
var MainMenu = require("./MainMenu.js");

var ProfilePage = React.createClass({

	mainMenuItems: ["About", "Posts", "Collections", "Photos", "YouTube", "+1's", "Reviews"],

	render: function() {
		return (
			<div className="profile-page">
				<div className="profile-page-top">
					<div className="profile-page-top-left">
						<Profile person={this.props.person}/>
					</div>
					<div className="profile-page-top-right">
						<img src={this.props.person.imageUrl} alt="Profile Image Goes Here"
							className="profile-page-image"/>
					</div>
				</div>
				<div className="profile-page-bottom">
					<MainMenu mainMenuItems={this.mainMenuItems}/>
				</div>
			</div>
		)
	}

});

module.exports = ProfilePage;
