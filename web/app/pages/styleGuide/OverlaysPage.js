import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from 'src/components/Button/Button';
import Overlay from 'src/components/Overlay/Overlay';
import OverlayAbsolute from 'src/components/Overlay/OverlayAbsolute';

export const OverlayContainerStyled = styled.div`
  position: relative;
  border: 1px solid black;
  padding: 30px;
  margin: 20px;
`;

class OverlaysPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlayActive: false,
      isAbsoluteOverlayActive: false,
      isAbsoluteOverlayWithTextActive: false,
    };
  }

  onClickDefault = () => {
    this.setState({
      isOverlayActive: true,
    });

    setTimeout(() => {
      this.setState({
        isOverlayActive: false,
      });
    }, 2000);
  };

  onClickAbsolute = () => {
    this.setState({
      isAbsoluteOverlayActive: true,
    });

    setTimeout(() => {
      this.setState({
        isAbsoluteOverlayActive: false,
      });
    }, 2000);
  };

  onClickAbsoluteWithText = () => {
    this.setState({
      isAbsoluteOverlayWithTextActive: true,
    });

    setTimeout(() => {
      this.setState({
        isAbsoluteOverlayWithTextActive: false,
      });
    }, 2000);
  };

  render() {
    return (
      <div className="p-style-guide-overlays">
        <h1>Overlays</h1>
        <Button onClick={this.onClickDefault}>Full Page</Button>
        <Overlay isActive={this.state.isOverlayActive} />
        <OverlayContainerStyled>
          <Button onClick={this.onClickAbsolute}>Specific Element Page</Button>
          <OverlayAbsolute isActive={this.state.isAbsoluteOverlayActive} />
        </OverlayContainerStyled>
        <OverlayContainerStyled>
          <Button onClick={this.onClickAbsoluteWithText}>Specific Element Page With Overlay Text</Button>
          <OverlayAbsolute isActive={this.state.isAbsoluteOverlayWithTextActive}>I am text</OverlayAbsolute>
        </OverlayContainerStyled>
      </div>
    );
  }
}

OverlaysPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default OverlaysPage;
