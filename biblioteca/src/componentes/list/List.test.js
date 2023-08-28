import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorBox from './ColorBox';

describe('ColorBox', () => {
  it('renders without crashing', () => {
    render(<ColorBox />);
  });

  it('changes color on click', () => {
    const { getByTestId } = render(<ColorBox />);
    const colorBox = getByTestId('color-box');

    const initialColor = colorBox.style.backgroundColor;
    fireEvent.click(colorBox);
    const newColor = colorBox.style.backgroundColor;

    expect(newColor).not.toBe(initialColor);
  });

  it('changes color on button click', () => {
    const { getByTestId, getByText } = render(<ColorBox />);
    const colorBox = getByTestId('color-box');
    const changeColorButton = getByText('Change Color');

    const initialColor = colorBox.style.backgroundColor;
    fireEvent.click(changeColorButton);
    const newColor = colorBox.style.backgroundColor;

    expect(newColor).not.toBe(initialColor);
  });
});