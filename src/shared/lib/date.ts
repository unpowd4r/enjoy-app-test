import dayjs from 'dayjs';

import 'dayjs/locale/ru';

dayjs.locale('ru');

export const formatDate = (date: string) => dayjs(date).format('DD.MM.YYYY');
export const nowDate = () => dayjs().toISOString();
