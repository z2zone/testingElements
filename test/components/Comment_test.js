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

	describe('user enters text', ()=>{

		beforeEach(()=>{
			component.find('textarea').simulate('change', 'added comment');
			// simulate a 'change' event and value is 'added comment'
		});

		it('entered some texts', ()=>{
			expect(component.find('textarea')).to.have.value('added comment');
		});

		it('clears out textarea after a form submittal event', ()=>{
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});


	});
	
});
