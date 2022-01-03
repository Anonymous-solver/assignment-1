import React, { Component } from 'react';

class Counter extends Component {
	render() {
		const {handleIncrement, handleDecrement, handleRemove, id, value} = this.props 
		return (
			<>
				<div>
					<div style = {{backgroundColor: 'AliceBlue', boxShadow: '1px 1px 5px gray', textAlign: 'center', margin: '10px 500px 20px 500px', border: '1px solid gray', padding: '20px', borderRadius: '5px'}}>
						<button onClick={() => {handleIncrement(id)}} className = 'btn btn-primary'>Increment</button>
						<h4>{value}</h4>
						<button onClick={() => {handleDecrement(id)}} className = 'btn btn-primary'>Decrement</button>
						<h1></h1>
						<button onClick={() => {handleRemove(id)}} className = 'btn btn-primary'>Remove</button>
					</div>
				</div>
			</>
		);
	}
}
 
export default Counter;