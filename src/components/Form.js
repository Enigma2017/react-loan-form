import React, { Component } from 'react';

class Form extends Component {
	state = {
		amount: '',
		term: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		
		//read the values from the state
		const {amount, term} = this.state;

		//pass the data to the main component
		this.props.loanInformation(amount, term);
	}

	handleChange = (e) => {
		//read form data

		const {name, value} = e.target;

		//update the state
		this.setState({
			[name] : Number(value)
		})
	}

	validateForm = () => {
		//destructuring
		const {amount, term} = this.state;

		const notValid = !amount || !term;
		
		return notValid;
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<label>Amount</label>
					<input
						onChange={this.handleChange}
						id="name"
						name="amount" 
						className="u-full-width" 
						type="number" 
						placeholder="Eg: 3000" />
				</div>
				<div>
					<label>Months</label>
					<select 
						onChange={this.handleChange}
						name="term" 
						className="u-full-width">
							<option value="">-Select-</option>
							<option value="3">3 Month</option>
							<option value="6">6 Month</option>
							<option value="12">12 Month</option>
							<option value="24">24 Month</option>
					</select> 
				</div>
				<div>
					<input disabled={this.validateForm()} 
						   type="submit" 
						   value="Calculate" 
						   className="u-full-width button-primary" />
				</div>
			</form>
		);
	}
}

export default Form;