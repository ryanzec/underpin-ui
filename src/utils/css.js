import * as themesCss from 'src/styles/themes';
import {css} from 'styled-components';

const themeColors = themesCss.light;

/**
 * Generating the required css for a filled colored element (like a Button, Badge, etc.)
 *
 * @param {string} light The light color to be used for the text color
 * @param {string} dark The dark color to be used for the background / border
 *
 * @returns {string} Resulting css
 */
export const fillColors = (light, dark) => {
  return css`
    color: ${light};
    background-color: ${dark};
    border-color: ${dark};
  `;
};

/**
 * Generating the required css for a this colored element (like a Button, Badge, etc.)
 *
 * @param {string} dark The dark color to be used for the text color / border
 *
 * @returns {string} Resulting css
 */
export const thinColors = (dark) => {
  return css`
    color: ${dark};
    background-color: ${themeColors.global.white};
    border-color: ${dark};
  `;
};

/**
 * This fixes issues with FireFox / IE where when setting the flex value to a
 * specific value(like 50%, 25px, etc) does not work as expected, this adds in
 * a max height or width which resolves that issues
 *
 * @param {string} type The type of the value, either 'height' or 'width'
 * @param {string} value The height or width to be specified
 *
 * @returns {string} Resulting css
 */
export const flexboxSpecificValue = (type, value) => {
  return `
    flex: 0 0 ${value};
    max-${type}: ${value};
  `;
};

export const borderRadius = (side, radius) => {
  if (side === 'top' || side === 'bottom') {
    return `
      border-${side}-left-radius: ${radius};
      border-${side}-right-radius: ${radius};
    `;
  }

  return `
    border-top-${side}-radius: ${radius};
    border-bottom-${side}-radius: ${radius};
  `;
};

/**
 * This will take a css unit (14px, 1.4rem, etc) and parse out and return the
 * numerical number
 *
 * @param {string} unit The css unit value to parse
 *
 * @return {number} The numerical part of the value
 */
export const getUnitValue = (unit) => {
  return parseFloat(unit.replace(/[^-\d\.]/g, ''));
};

/**
 * This will take a css unit (14px, 1.4rem, etc) and parse out and return the
 * unit type (px, rem, etc.)
 *
 * @param {string} unit The css unit value to parse
 *
 * @return {string} The unit type of the value
 */
export const getUnitType = (unit) => {
  return unit.replace(/[\-\d\.]/g, '');
};

/**
 * This will perform an addition to a css value that has a unit type (px, rem,
 * etc.) on it already
 *
 * @param {string} base The css unit value to add too
 * @param {number} adding The value to add to the css unit
 *
 * @return {string} The valid css unit with the calculation performed
 */
export const addValue = (base, adding) => {
  const unit = getUnitType(base);

  return `${getUnitValue(base) + adding}${unit}`;
};

/**
 * This will perform an subtraction to a css value that has a unit type (px,
 * rem, etc.) on it already
 *
 * @param {string} base The css unit value to subtract from
 * @param {number} subtracting The value to subtract from the css unit
 *
 * @return {string} The valid css unit with the calculation performed
 */
export const subtractValue = (base, subtracting) => {
  const unit = getUnitType(base);

  return `${getUnitValue(base) - subtracting}${unit}`;
};
