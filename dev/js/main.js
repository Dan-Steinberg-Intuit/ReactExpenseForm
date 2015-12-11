/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ExpenseForm = require("./components/ExpenseForm.js");

ReactDOM.render(
	<ExpenseForm />,
	document.getElementById("main")
);