import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

export default ({ onClickHandler }: {
  onClickHandler: (event: React.FormEvent<EventTarget>) => void
}) => (
  <RootContainer>
    <Button
      variant="contained"
      size="large"
      color="secondary"
      onClick={onClickHandler}
    >
    What’s for Lunch
    </Button>
  </RootContainer>
);
