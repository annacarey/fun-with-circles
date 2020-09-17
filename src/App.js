import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const App = () => (
  <Wrapper data-testid="wrapper">
    <Circle />
    <Circle />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
