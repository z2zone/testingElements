import React, { Component } from 'react';

class Comment extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="comment">
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<button>Submit Comment</button>
			</div>
		);
	}
}

export default Comment;