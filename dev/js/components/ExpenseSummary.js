/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ExpenseSummary = React.createClass({

	toDollarFormat: function(amount) {
		return amount.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	},

	render: function() {

		var that = this;
		var records = this.props.data;
		var recordsCount = records.length;
		var totalAmount = 0;
		for (var index = 0; index < recordsCount; index++) {
			totalAmount += records[index].expenseAmount;
		}

		return (
			<div className="expense-summary">
				<div className="expense-summary-headers">Expenses Due:</div>
				<div>{recordsCount}</div>
				<div className="expense-summary-headers expense-summary-break">Total Expenses:</div>
				<div>$ {that.toDollarFormat(totalAmount)}</div>
			</div>
		)
	}

});

module.exports = ExpenseSummary;
