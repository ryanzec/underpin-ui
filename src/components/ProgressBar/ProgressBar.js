import PropTypes from 'prop-types';
import styled from 'styled-components';
import {capitalize} from 'lodash';

import * as progressBarCss from 'src/components/ProgressBar/internal/progressBarCss';

export const fillStyles = (fillColor) => {
  return `
    &[value] {
      &::-ms-fill {
        background-color: ${fillColor};
      }

      &::-moz-progress-bar {
        background-color: ${fillColor};
      }

      &::-webkit-progress-value {
        background-color: ${fillColor};
      }
    }
  `;
};

export const stripedCss = () => {
  return `
    background-size: 30px 30px;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, .2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, .2) 50%,
      rgba(255, 255, 255, .2) 75%,
      transparent 75%,
      transparent
    );
  `;
};

export const stripedStyles = (props) => {
  if (!props.isStriped) {
    return '';
  }

  // NOTE: while all 3 selectors have the same properties, they need to be separate for them to work properly
  return `
    &[value] {
      &::-ms-fill  {
        ${stripedCss()}
      }

      &::-moz-progress-bar  {
        ${stripedCss()}
      }

      &::-webkit-progress-value {
        ${stripedCss()}
      }
    }
  `;
};

export const pillStyles = (props) => {
  if (props.isSquare) {
    return '';
  }

  return `
    &[value] {
      border-radius: calc(${progressBarCss.variables.height} / 2);

      &::-moz-progress-bar {
        border-radius: calc(${progressBarCss.variables.height} / 2);
      }

      &::-webkit-progress-value,
      &::-webkit-progress-bar {
        border-radius: calc(${progressBarCss.variables.height} / 2);
      }
    }
  `;
};

export const styleTypeStyles = (props) => {
  const backgroundColor = props.styleType
    ? progressBarCss.variables[`backgroundColorFilled${capitalize(props.styleType)}`]
    : progressBarCss.variables.backgroundColorFilled;

  return `
    ${fillStyles(backgroundColor)}
  `;
};

export const ProgressBar = styled.progress`
  ${styleTypeStyles} display: block;
  width: 100%;
  height: ${progressBarCss.variables.height};

  &[value] {
    border: 0;
    appearance: none;
    background-color: ${progressBarCss.variables.backgroundColorUnfilled};

    &::-ms-fill {
      border: 0;
    }

    &::-webkit-progress-bar {
      background-color: ${progressBarCss.variables.backgroundColorUnfilled};
    }
  }

  ${pillStyles} ${stripedStyles};
`;

ProgressBar.propsTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  isStriped: PropTypes.bool,
  isSquare: PropTypes.bool,
  max: PropTypes.number,
  value: PropTypes.number,
};

ProgressBar.defaultProps = {
  styleType: null,
  isStriped: false,
  isSquare: false,
  max: 100,
  value: 0,
};

export default ProgressBar;
