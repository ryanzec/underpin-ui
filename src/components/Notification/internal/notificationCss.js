import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  offsetPositionContainer: '16px',
  padding: '16px',
  colorSuccess: theme.state.success,
  colorSuccessDark: theme.state.successDark,
  colorInfo: theme.state.info,
  colorInfoDark: theme.state.infoDark,
  colorWarning: theme.state.warning,
  colorWarningDark: theme.state.warningDark,
  colorDanger: theme.state.danger,
  colorDangerDark: theme.state.dangerDark,
  borderRadius: '5px',
  sizeIcon: '24px',
  lineHeight: '2.4rem',
  boxShadow: `0px 1px 3px ${theme.application.boxShadow}`,
  backgroundColor: theme.global.white,
};
