import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  height: '16px',
  backgroundColorUnfilled: theme.global.gray2,
  backgroundColorFilled: theme.global.gray3,
  backgroundColorFilledSuccess: theme.state.success,
  backgroundColorFilledInfo: theme.state.info,
  backgroundColorFilledWarning: theme.state.warning,
  backgroundColorFilledDanger: theme.state.danger,
};
