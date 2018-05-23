import React, { Component } from 'react';
import { saveComment } from '../actions';
import { connect } from 'react-redux';

class Comment extends Component {
	
	constructor(props) {
		super(props);

		this.state = { entered: ''};
		this.handleFormEvent = this.handleFormEvent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFormEvent(event){
		this.setState({entered: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.saveComment(this.state.entered);
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
					onChange={this.handleFormEvent}
				/>	
				<br/>
				<button type="submit">Submit Comment</button>
			</form>
		);
	}
}

export default connect(null, {saveComment})(Comment);