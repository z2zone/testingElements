import { expect } from '../test_helper';
import { SAVE_COMMENT, saveComment } from '../../src/actions';

describe('actions', ()=>{
	describe('saveComment', ()=>{

		it('returns correct savecomment type', ()=>{
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});

		it('returns correct savecomment payload', ()=>{
			const action = saveComment('new comment');
			expect(action.payload).to.equal('new comment');
		});
	});
});