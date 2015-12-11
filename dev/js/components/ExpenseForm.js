/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ProfilePage = require("./ProfilePage.js");
var ExpenseTable = require("./ExpenseTable.js");
var ExpenseSummary = require("./ExpenseSummary.js");


var ExpenseForm = React.createClass({

	render: function() {
		return (
			<div>
				<ProfilePage />
				<ExpenseTable />
				<ExpenseSummary />
			</div>
		)
	}

});

module.exports = ExpenseForm;
