import React from 'react';
import { connect } from 'react-redux';

const Lists = (props)=> {

	const lists = props.lists.map((list)=>{
		return (
			<li key={list}>
				{list}
			</li>
		);
	});

	return (
		<div className="lists">
			<ul className="single-list">
				{lists}
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