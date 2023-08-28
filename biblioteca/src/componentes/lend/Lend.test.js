import React from 'react';
import { shallow } from 'enzyme';
import Lend from './Lend';

describe('Lend Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Lend />);
    expect(wrapper.exists()).toBe(true);
  });

  it('initial book count is 0', () => {
    const wrapper = shallow(<Lend />);
    const bookCountText = wrapper.find('.book-count').text();
    expect(bookCountText).toContain('Libros solicitados prestamo: 0');
  });

  it('increments book count on button click', () => {
    const wrapper = shallow(<Lend />);
    const button = wrapper.find('.request-button');

    button.simulate('click');
    const bookCountText = wrapper.find('.book-count').text();
    expect(bookCountText).toContain('Libros solicitados prestamo: 1');
  });

  it('calculates total cost correctly', () => {
    const wrapper = shallow(<Lend />);
    const button = wrapper.find('.request-button');

    // Click the button 3 times
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');

    const totalCostText = wrapper.find('.total-cost').text();
    expect(totalCostText).toContain('Costo total: $1500');
  });
});