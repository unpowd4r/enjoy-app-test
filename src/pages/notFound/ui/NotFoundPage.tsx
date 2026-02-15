import { Result } from 'antd';

import { ROUTES } from 'shared/consts';
import { HTTP_STATUS_CODE } from 'shared/consts/httpStatusCode';
import { NavigateButton } from 'shared/ui/navigateButton';

export const NotFoundPage = () => {
  return (
    <Result
      status={HTTP_STATUS_CODE.NOT_FOUND}
      title={HTTP_STATUS_CODE.NOT_FOUND.toString()}
      subTitle="Извините, страница не найдена"
      extra={<NavigateButton to={ROUTES.HOME}>На главную</NavigateButton>}
    />
  );
};
