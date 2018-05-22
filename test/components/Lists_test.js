import { renderComponent, expect } from '../test_helper';
import Lists from '../../src/components/Lists';

describe('Lists', ()=>{

	let component;
	beforeEach(()=>{
		const props = { lists: ['comment 1', 'comment 2'] };
		component = renderComponent(Lists, null, props);
		// Now the Lists component will get its state from redux. eg) this.props.lists 
		// we need to push this props to renderComponent method.
	});

	it('shows correct <li> HTML tags', ()=>{
		expect(component.find('li').length).to.equal(2);
	});	

	it('correctly renders the typed comments', ()=>{
		expect(component).to.contain('comment 1');
		expect(component).to.contain('comment 2');
	});
});