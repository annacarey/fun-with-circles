/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Circle from './Circle';

const renderCircle = () => render(<Circle />);

beforeEach(() => {
  renderCircle();
});

describe('<Circle />', () => {
  it('has inputs for an x value and a y value', () => {
    expect(screen.getByLabelText('X:')).toBeInTheDocument();
    expect(screen.getByLabelText('Y:')).toBeInTheDocument();
    expect(screen.getByTestId('x-input')).toBeInTheDocument();
    expect(screen.getByTestId('y-input')).toBeInTheDocument();
  });

  it('allows user to fill in an x or y numerical value', () => {
    userEvent.type(screen.getByLabelText('X:'), '100');
    expect(screen.getByLabelText('X:')).toHaveValue(100);
  });

  it('does not allow user to fill in the x/y inputs with letters', () => {
    userEvent.type(screen.getByLabelText('X:'), 'hello');
    expect(screen.getByLabelText('X:')).toHaveValue(null);
  });

  it('moves to the correct position on the screen with x and y inputs', () => {
    userEvent.type(screen.getByLabelText('X:'), '200');
    userEvent.type(screen.getByLabelText('Y:'), '100');
    expect(screen.getByTestId('circle-div').style.marginTop).toBe('100px');
    expect(screen.getByTestId('circle-div').style.marginLeft).toBe('200px');
  });

  //   Testing drag and drop to do for later
  //   it('fills in a new x and y vale when dragged', () => {
  //     const circle = screen.getByTestId('circle-div');
  //     const target = document.createElement('div');
  //     // const wrapper = screen.getByTestId('wrapper');
  //     target.style.top = '16px';
  //     target.style.left = '16px';
  //     target.style.position = 'fixed';
  //     circle.appendChild(target);
  //     console.log(screen.debug());
  //     fireEvent.dragStart(circle);

  //     fireEvent.dragEnter(target);
  //     fireEvent.dragOver(target);

  //     // fireEvent.dragOver({
  //     //   clientX: 16,
  //     //   clientY: 16,
  //     // // });
  //     // fireEvent.scroll(circle, { target: { scrollY: 16, scrollX: 16 } });
  //     // fireEvent.scrollRight(16);
  //     // fireEvent.scrollDown(16);

  //     fireEvent.drop(target);

//     // fireEvent.drop({
//     //   clientX: 16,
//     //   clientY: 16,
//     // });
//     // fireEvent.mouseDown(circle);
//     // fireEvent.mouseMove(circle, {
//     //   clientX: 16,
//     //   clientY: 16,
//     // });
//     // fireEvent.mouseUp(circle);
//     expect(screen.getByLabelText('X:')).toHaveValue(16);
//     expect(screen.getByLabelText('X:')).toHaveValue(16);
//   });
});
