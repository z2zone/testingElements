import React, { Component } from 'react';

class Comment extends Component {
	
	constructor(props) {
		super(props);

		this.state = { entered: ''};
		this.handleEvent = this.handleEvent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEvent(event){
		this.setState({entered: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState({entered: ''});
	}

	render(){
		return(
			<form 
				className="comment"
				onSubmit={this.handleSubmit}
			>
				<textarea 
					cols="30" 
					rows="10"
					value={this.state.entered}
					onChange={this.handleEvent}
				/>	

				<button type="submit">Submit Comment</button>
			</form>
		);
	}
}

export default Comment;