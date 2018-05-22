import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App';

describe('App' , () => {

  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders parent component with .app class', () => {
    expect(component).to.have.class('app');
  });

  it('renders child component with .comment class', () => {
    expect(component.find('.comment')).to.exist;
  });

  it('renders child component with .lists class', () => {
    expect(component.find('.lists')).to.exist;
  });


});
