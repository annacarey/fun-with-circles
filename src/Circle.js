import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Draggable from 'react-draggable';

const Circle = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleDrag = (e) => {
    setX(e.x);
    setY(e.y);
  };

  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      scale={1}
      onDrag={handleDrag}
      style={{ display: 'fixed' }}
    >
      <div
        style={{ marginTop: `${y}px`, marginLeft: `${x}px`, display: 'fixed' }}
        data-testid="circle-div"
      >

        <CircleSpan
          className="handle"
        />
        <Form>
          <label htmlFor="x-value">
            X:
            <input
              onChange={(e) => setX(e.target.value)}
              data-testid="x-input"
              id="x-value"
              name="x"
              type="number"
              value={x}
            />

          </label>
          <label htmlFor="y-value">
            Y:
            <input
              onChange={(e) => setY(e.target.value)}
              data-testid="y-input"
              id="y-value"
              name="y"
              type="number"
              value={y}
            />
          </label>
        </Form>

      </div>
    </Draggable>

  );
};

export default Circle;

const CircleSpan = styled.span`
  height: 200px;
  width: 200px;
  background-color: blue;
  border-radius: 50%;
  display: flex;
  `;

const Form = styled.form`

  `;
