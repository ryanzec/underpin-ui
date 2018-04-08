const breakPoints = {
  small: '640px',
  smallMax: '640px',
  medium: '1024px',
  mediumMax: '1024px',
  large: '1600px',
  largeMax: '1600px',
};

export const font = {
  fontFamily: 'Roboto',
  fontSize: '1.3rem',
};

export const spacing = {
  extraTiny: '.5rem',
  tiny: '1rem',
  extraSmall: '1.5rem',
  small: '2rem',
  medium: '2.5rem',
  large: '3rem',
};

export const borderRadius = {
  pill: '999rem',
  tiny: '.3rem',
  small: '.5rem',
  medium: '1rem',
};

export const mediaQueries = {
  smallScreen: 'only screen',
  smallScreenOnly: `only screen and (min-width: 1px) and (max-width: ${breakPoints.smallMax})`,
  smallScreenMax: `only screen and (max-width: ${breakPoints.smallMax})`,
  mediumScreen: `only screen and (min-width: ${breakPoints.small})`,
  mediumScreenOnly: `only screen and (min-width: ${breakPoints.small}) and (max-width: ${breakPoints.mediumMax})`,
  mediumScreenMax: `only screen and (max-width: ${breakPoints.mediumMax})`,
  largeScreen: `only screen and (min-width: ${breakPoints.medium})`,
  largeScreenOnly: `only screen and (min-width: ${breakPoints.medium}) and (max-width: ${breakPoints.largeMax})`,
  largeScreenMax: `only screen and (max-width: ${breakPoints.largeMax})`,
};
