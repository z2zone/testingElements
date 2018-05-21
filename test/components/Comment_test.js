import {renderComponent, expect} from '../test_helper';
import Comment from '../../src/components/Comment';

describe('Comment', ()=>{

	let component;
	beforeEach(()=>{
		component = renderComponent(Comment);
	});
	// beforeEach runs before "it" blocks. 
	// component needs to be initialized outside of the beforeEach function scope.

	it('has a correct class name', ()=>{
		expect(component).to.have.class('comment'); 
		// no paranthesis. --
	});

	it('has a textarea', ()=>{
		expect(component.find('textarea')).to.exist; 
	});	

	it('has a submit button', ()=>{
		expect(component.find('button')).to.exist;

	});
	
});
