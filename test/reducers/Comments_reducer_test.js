import { expect } from '../test_helper';
import CommentsReducer from '../../src/reducers/Comments_reducer';
import { SAVE_COMMENT } from '../../src/actions';

describe('CommentsReducer', ()=>{
	// divdie it into all the possible cases
	it('handles action with unknown type', ()=>{
		expect(CommentsReducer(undefined, {})).to.eql([]);
	});

	it('handles action with SAVE_COMMENT type', ()=>{
		const action = {type: SAVE_COMMENT, payload: 'new comment'}
		expect(CommentsReducer([], action)).to.eql(['new comment']);
	});
	
});