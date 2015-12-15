/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var Profile = React.createClass({

	render: function() {

		var person = this.props.person;
		var backgroundStyle = {
            backgroundImage: 'url(' + person.imageUrl + ')'
        };

		return (
			<div className="profile">
				<div className="profile-background" style={backgroundStyle}></div>
				<div className="profile-text-box">
					<img className="profile-image" src={person.pictureUrl} alt="Profile Image"/>
					<div className="profile-name">{person.name}</div>
					<div className="profile-text">Works at {person.company}</div>
					<div className="profile-text">Attended {person.school}</div>
					<div className="profile-text">Lives in {person.city}, {person.state}</div>

					<div className="profile-stats">
						<span className="profile-followers">{person.followers}</span>
						&nbsp;followers |&nbsp;
						<span className="profile-views">{person.visits}</span> views
					</div>
				</div>
			</div>
		)
	}

});

module.exports = Profile;
