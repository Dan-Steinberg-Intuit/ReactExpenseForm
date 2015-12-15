/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ExpenseTable = React.createClass({

	toDollarFormat: function(amount) {
		return amount.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	},

	render: function() {

		var that = this;
	    var recordRows = this.props.data.map(function(record) {
	    	return (
		        <tr key={record.id}>
		        	<td>{record.expenseName}</td>
		        	<td>{record.expenseDueDate}</td>
		        	<td>$ {that.toDollarFormat(record.expenseAmount)}</td>
		        </tr>
	        );
	    });

		return (
			<table className="expense-table">
				<thead>
					<tr>
						<th>Expense Name</th>
						<th>Due Date</th>
						<th>Amount ($)</th>
					</tr>
				</thead>
				<tbody>
					{recordRows}
				</tbody>
			</table>
		)
	}

});

module.exports = ExpenseTable;
