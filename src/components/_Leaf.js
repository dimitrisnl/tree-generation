import React, { Component } from 'react';
import styled from 'react-emotion';

import colors from 'utils/colors';

export class Leaf extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { children, hasChildren, title } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrapper>
        <Switch
          hasChildren={hasChildren}
          isOpen={isOpen}
          onClick={this.toggle}
        />
        {title}
        <Children isOpen={isOpen}>{children}</Children>
      </Wrapper>
    );
  }
}

export default Leaf;

const Wrapper = styled.div`
  margin-left: 1rem;
  line-height: 1.4;

  position: relative;
`;

const Switch = styled.div`
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${colors.theme.nord3};

  display: ${props => (props.hasChildren ? 'block' : 'none')};
  width: 0;
  height: 0;

  position: absolute;
  left: -1rem;
  top: 8px;

  transform: ${props => (props.isOpen ? 'none' : 'rotate(-90deg)')};
  transition: transform 0.3s ease-in-out;

  cursor: pointer;
`;

const Children = styled.div`
  max-height: ${props => (props.isOpen ? '400px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;
