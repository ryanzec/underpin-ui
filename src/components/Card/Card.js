import PropTypes from 'prop-types';
import styled from 'styled-components';
import {capitalize} from 'lodash';

import * as themesCss from 'src/styles/themes';
import * as cssUtils from 'src/utils/css';
import * as cardCss from 'src/components/Card/internal/cardCss';

const applyStatusColors = (props) => {
  if (!props.styleType) {
    return '';
  }

  const backgrondColor = cardCss.variables[`backgroundColor${capitalize(props.styleType)}`];

  return cssUtils.fillColors(cardCss.variables.colorStyled, backgrondColor);
};

export const Card = styled.div`
  position: relative;
  display: inline-block;
  border: ${cardCss.variables.borderWidth} solid ${themesCss.light.application.border};
  background-color: ${cardCss.variables.backgroundColor};
  border-radius: ${cardCss.variables.borderRadius};

  //NOTE: this is needed so images don't push other content down
  vertical-align: top;

  ${applyStatusColors};
`;

Card.propTypes = {
  styleType: PropTypes.oneOf(['success', 'info', 'warning', 'danger', 'link']),
};

Card.defaultProps = {
  styleType: null,
};

export default Card;
