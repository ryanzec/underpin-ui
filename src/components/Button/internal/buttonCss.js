import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  color: theme.global.white,
  colorLight: theme.global.white,
  backgroundColor: theme.global.gray5,
  backgroundColorHover: theme.global.gray6,
  padding: '4px 8px',
  borderRadius: '10px',
  margin: '4px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3) inset',
  backgroundColorSuccess: theme.state.success,
  backgroundColorSuccessHover: theme.state.successDark,
  backgroundColorInfo: theme.state.info,
  backgroundColorInfoHover: theme.state.infoDark,
  backgroundColorWarning: theme.state.warning,
  backgroundColorWarningHover: theme.state.warningDark,
  backgroundColorDanger: theme.state.danger,
  backgroundColorDangerHover: theme.state.dangerDark,
  fontSize: '1.4rem',
};
