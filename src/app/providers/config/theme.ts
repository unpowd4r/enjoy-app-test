import { ThemeConfig } from 'antd';

import { colors } from 'shared/styles';

export const antdTheme: ThemeConfig = {
  components: {
    Form: {
      itemMarginBottom: 8
    },
    Button: {
      colorPrimary: colors.modalButton
    }
  }
};
