import React, { Component, Fragment } from 'react';
import styled from 'react-emotion';

import colors from 'utils/colors';
import { Leaf } from 'components';

export class Tree extends Component {
  render() {
    const { tree } = this.props;

    const populateChildren = (tree, depth = 0) => {
      if (tree.children && tree.children.length > 0) {
        return tree.children.map((x, index) => {
          return (
            <Leaf
              key={index}
              hasChildren={x.children.length > 0}
              title={x.title}
            >
              {x.children.length > 0 && populateChildren(x, depth + 1)}
            </Leaf>
          );
        });
      }
    };

    return (
      <Wrapper>{populateChildren(tree) || 'Result will appear here'}</Wrapper>
    );
  }
}

export default Tree;

const Wrapper = styled.div`
  border-radius: 4px;
  flex: 1;
  padding: 2rem;

  width: 100%;
  height: 100%;
`;
