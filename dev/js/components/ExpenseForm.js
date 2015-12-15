/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ProfilePage = require("./ProfilePage.js");
var ExpenseTable = require("./ExpenseTable.js");
var ExpenseSummary = require("./ExpenseSummary.js");


var ExpenseForm = React.createClass({

	getInitialState: function() {
		return {
			person: {
				name: "Dan Steinberg",
				company: "Intuit Inc.",
				school: "USC",
				city: "Palo Alto",
				state: "CA",
				pictureURL: "",
				followers: 99,
				visits: 1024,
				imageUrl: "./img/circuit.png",
				pictureUrl: "./img/Yofi.png"
			},
			records: [
				{id: 1, expenseName: "Office Rent", expenseDueDate: "12/15/2015", expenseAmount: 3580.01},
				{id: 2, expenseName: "Raw Materials", expenseDueDate: "12/25/2015", expenseAmount: 10560.00}
			]
		};
	},

	render: function() {
		return (
			<div className="expense-form">
				<ProfilePage person={this.state.person}/>
				<ExpenseTable data={this.state.records}/>
				<ExpenseSummary data={this.state.records}/>
			</div>
		)
	}

});

module.exports = ExpenseForm;
