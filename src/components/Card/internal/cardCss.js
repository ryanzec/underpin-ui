import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  borderWidth: '1px',
  padding: '16px',
  backgroundColor: theme.global.white,
  borderRadius: '5px',
  colorSubtitle: theme.global.gray5,
  backgroundColorHeaderFooter: theme.global.gray2,
  colorFooterHeader: theme.global.gray5,
  colorStyled: theme.global.white,
  backgroundColorSuccess: theme.state.success,
  borderColorSuccess: theme.state.success,
  backgroundColorInfo: theme.state.info,
  borderColorInfo: theme.state.info,
  backgroundColorWarning: theme.state.warning,
  borderColorWarning: theme.state.warning,
  backgroundColorDanger: theme.state.danger,
  borderColorDanger: theme.state.danger,
  marginCardCardColumn: '8px',
};
