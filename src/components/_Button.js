import React, { Component } from 'react';
import styled from 'react-emotion';

import colors from 'utils/colors';

export class Button extends Component {
  render() {
    const { children, onClick, disabled } = this.props;
    return (
      <div>
        <Wrapper disabled={disabled} onClick={!disabled ? onClick : undefined}>
          {children}
        </Wrapper>
      </div>
    );
  }
}

export default Button;

const Wrapper = styled.button`
  background: ${colors.theme.nord3};
  color: ${colors.typography.light};
  font-size: 0.8rem;

  padding: 0.75rem 1rem;
  width: 100%;

  transition: background 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${colors.theme.nord2};
  }

  &:active {
    background: ${colors.theme.nord0};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
