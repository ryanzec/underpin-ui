import * as themesCss from 'src/styles/themes';

const themeColors = themesCss.light;

export const fillColors = (light, dark) => {
  return `
    color: ${light};
    background-color: ${dark};
    border-color: ${dark};
  `;
};

export const thinColors = (dark) => {
  return `
    color: ${dark};
    background-color: ${themeColors.global.white};
    border-color: ${dark};
  `;
};

//HACK: there seems to be issues with FireFox and IE and setting the flex value to a specific value(50%, 25px, etc.)
//HACK: instead of just a flex size value (1, 2, etc.), this mixin resolves that issue by add a max-height(or width)
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

export const getUnitValue = (unit) => {
  return parseFloat(unit.replace(/[^-\d\.]/g, ''));
};

export const getUnitType = (unit) => {
  return unit.replace(/[\-\d\.]/g, '');
};

export const addValue = (base, adding) => {
  const unit = getUnitType(base);

  return `${getUnitValue(base) + adding}${unit}`;
};

export const subtractValue = (base, subtracting) => {
  const unit = getUnitType(base);

  return `${getUnitValue(base) - subtracting}${unit}`;
};
