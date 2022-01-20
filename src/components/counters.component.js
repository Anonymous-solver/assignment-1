import React, { Component } from "react";
import Counter from "./counter.component";

class Counters extends Component {
	state = {
		counters: [
			{
				id: 1,
				value: 0,
			},
			{
				id: 2,
				value: 0,
			},
			{
				id: 3,
				value: 0,
			},
		],
	};

	handleIncrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		counter.value += 1;
		this.setState({ counters: counters });
	};

	handleDecrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		if (counter.value === 0) return;
		counter.value -= 1;
		this.setState({ counters: counters });
	};

	handleRemove = (id) => {
		let counters = [...this.state.counters];
		counters = counters.filter((counter) => counter.id !== id);
		this.setState({ counters: counters });
	};

	render() {
		return (
			<>
				{this.state.counters.map((counter) => (
					<React.Fragment key={counter.id}>
						<Counter
							id={counter.id}
							value={counter.value}
							handleIncrement={this.handleIncrement}
							handleDecrement={this.handleDecrement}
							handleRemove={this.handleRemove}
						></Counter>
					</React.Fragment>
				))}
			</>
		);
	}
}

export default Counters;
