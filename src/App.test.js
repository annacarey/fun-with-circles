/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const renderApp = () => render(<App />);

beforeEach(() => {
  renderApp();
});

describe('<App />', () => {
  it('should render two circles', () => {
    const circles = screen.getAllByTestId('circle-div');
    expect(circles.length).toBe(2);
  });

  // Drag and drop test to try again later:
  // it.only('fills in a new x and y vale when dragged', () => {
  //   const circle = screen.getAllByTestId('circle-div')[0];
  //   const target = document.createElement('div');
  //   const wrapper = screen.getByTestId('wrapper');
  //   target.style.top = '16px';
  //   target.style.left = '16px';
  //   target.style.position = 'fixed';
  //   target.style.width = '10px';
  //   target.style.height = '10px';
  //   wrapper.appendChild(target);

  //   console.log(screen.debug());
  //   fireEvent.dragStart(circle);
  //   fireEvent.dragEnter(target);
  //   fireEvent.dragOver(target);

  //   // fireEvent.dragOver({
  //   //   clientX: 16,
  //   //   clientY: 16,
  //   // // });
  //   // fireEvent.scroll(circle, { target: { scrollY: 16, scrollX: 16 } });
  //   // fireEvent.scrollRight(16);
  //   // fireEvent.scrollDown(16);

  //   fireEvent.drop(target);

  //   // fireEvent.drop({
  //   //   clientX: 16,
  //   //   clientY: 16,
  //   // });
  //   // fireEvent.mouseDown(circle);
  //   // fireEvent.mouseMove(circle, {
  //   //   clientX: 16,
  //   //   clientY: 16,
  //   // });
  //   // fireEvent.mouseUp(circle);
  //   expect(screen.getByLabelText('X:')).toHaveValue(16);
  //   expect(screen.getByLabelText('X:')).toHaveValue(16);
  });
});
