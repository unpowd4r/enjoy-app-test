import { ThemeConfig } from 'antd';

import { COLORS, THEME_SPACING } from 'shared/styles';

export const antdTheme: ThemeConfig = {
  components: {
    Form: {
      itemMarginBottom: THEME_SPACING.formItemMarginBottom
    },
    Button: {
      colorPrimary: COLORS.modalButton
    },
    Layout: {
      bodyBg: COLORS.bodyBg
    }
  }
};
