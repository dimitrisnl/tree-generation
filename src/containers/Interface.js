import React, { Component } from 'react';
import styled, { injectGlobal } from 'react-emotion';

import { Button, Textarea, Tree } from 'components';

import colors from 'utils/colors';
import breakpoints from 'utils/breakpoints';
import globals from 'utils/globals';
import { prepareTree } from 'utils/functions';
import { fallbackText, largerFallbackText } from 'utils/data';

export class Interface extends Component {
  state = { text: '', tree: {} };

  updateTextArea = e => {
    if (e.keyCode === 9) {
      const { selectionStart: caret, value } = e.target;
      const textWithTab = value.slice(0, caret) + '  ' + value.slice(caret);
      this.setState({ text: textWithTab });
    } else {
      this.setState({ text: e.target.value });
    }
  };

  generateTree = () => {
    try {
      const tree = prepareTree(this.state.text);
      this.setState({ tree });
    } catch (e) {
      console.log(e);
    }
  };

  clearTree = () => {
    this.setState({ tree: {}, text: '' });
  };

  populateWithNormalText = () => {
    this.setState({ text: fallbackText }, () => this.generateTree());
  };

  populateWithHugeText = () => {
    this.setState({ text: largerFallbackText }, () => this.generateTree());
  };

  render() {
    const { text, tree } = this.state;

    return (
      <Wrapper>
        <DisplayArea>
          <div>
            <Textarea
              value={text}
              onChange={this.updateTextArea}
              placeholder="Paste your Markup, or use the use the default values provided"
            />
          </div>
          <div>
            <Tree tree={tree} />
          </div>
        </DisplayArea>

        <Controls>
          <Button
            disabled={text.trim().length === 0}
            onClick={this.generateTree}
          >
            Generate tree
          </Button>
          <Button onClick={this.clearTree}>Clear</Button>
          <Button onClick={this.populateWithNormalText}>
            Use default values
          </Button>
          <Button onClick={this.populateWithHugeText}>
            Default values x10
          </Button>
        </Controls>
      </Wrapper>
    );
  }
}

export default Interface;

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 0 0 10px 4px #00000015;
  border-radius: 4px;

  position: relative;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  min-height: 75vh;
  width: calc(100vw - 2rem);
  max-width: 1200px;
`;

const DisplayArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem 2rem;

  > div {
    flex: 1 0 50%;
    padding: 0 1rem;
    height: calc(75vh - 8rem);
    overflow: auto;

    @media all and (max-width: ${breakpoints.smallScreens}) {
      flex: 1 0 100%;
      margin-bottom: 2rem;
    }
  }
`;
const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  > div {
    padding: 0 1rem;
    flex: 0 0 25%;

    @media all and (max-width: ${breakpoints.smallScreens}) {
      flex: 0 0 50%;
      padding: 0.5rem 1rem;
    }
  }
`;

injectGlobal`
  ${globals}
`;
