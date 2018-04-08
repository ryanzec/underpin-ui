import * as themesCss from 'src/styles/themes';

const theme = themesCss.light;

export const variables = {
  color: theme.global.white,
  padding: '2px 6px',
  borderRadius: '3px',
  borderRadiusPill: '9999px',
  margin: '4px',
  backgroundColor: theme.state.neutral,
  backgroundColorSuccess: theme.state.success,
  backgroundColorInfo: theme.state.info,
  backgroundColorWarning: theme.state.warning,
  backgroundColorDanger: theme.state.danger,
  backgroundColorThin: theme.global.white,
  borderWidthThin: '2px',
  colorSuccessThin: theme.state.success,
  colorInfoThin: theme.state.info,
  colorWarningThin: theme.state.warning,
  colorDangerThin: theme.state.danger,
  fontSize: '1.2rem',
};
