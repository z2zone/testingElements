import React from 'react';
import { connect } from 'react-redux';

const Lists = (props)=> {

	if(!props.lists || props.lists == []) {
		return(
			<div>
				No Lists yet... <br/>
				Please add comments.
			</div>
		);
	}

	const list = props.lists.map((list)=>{
		return (
			<li key={list}>
				{list}
			</li>
		);
	});

	return (
		<div className="lists">
			<ul className="single-list">
				{list}
			</ul>
		</div>	
	);
}

function mapStateToProps(state) {
	return({
		lists: state.lists
	});
}

export default connect(mapStateToProps)(Lists);