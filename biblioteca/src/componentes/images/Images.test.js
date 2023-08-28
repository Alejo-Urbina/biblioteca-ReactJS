import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from './ImageSlider';

describe('ImageSlider Component', () => {
  it('renders without crashing', () => {
    shallow(<ImageSlider />);
  });

  it('displays the correct initial image', () => {
    const wrapper = shallow(<ImageSlider />);
    const imageElement = wrapper.find('.slider-image');
    expect(imageElement.prop('src')).toBe('https://example.com/image1.jpg');
  });

  it('changes to the next image when "Siguiente" button is clicked', () => {
    const wrapper = shallow(<ImageSlider />);
    const nextButton = wrapper.find('.slider-button').at(1); // Siguiente button
    nextButton.simulate('click');
    const imageElement = wrapper.find('.slider-image');
    expect(imageElement.prop('src')).toBe('https://example.com/image2.jpg');
  });

  it('changes to the previous image when "Anterior" button is clicked', () => {
    const wrapper = shallow(<ImageSlider />);
    const prevButton = wrapper.find('.slider-button').at(0); // Anterior button
    prevButton.simulate('click');
    const imageElement = wrapper.find('.slider-image');
    expect(imageElement.prop('src')).toBe('https://example.com/image3.jpg');
  });
});