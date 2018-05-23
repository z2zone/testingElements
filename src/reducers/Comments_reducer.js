import { SAVE_COMMENT } from '../actions'

const CommentsReducer = (state=[], action) => {

	switch (action.type) {

		case SAVE_COMMENT:
			return [...state, action.payload];

		default:
			return state;
			
	}
}

export default CommentsReducer;