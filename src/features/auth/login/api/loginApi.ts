import { api } from 'shared/api/base';
import { API_ENDPOINTS } from 'shared/consts';

interface TAuthDataResponse {
  id: string;
  login: string;
  password: string;
}

export const loginRequest = async (login: string, password: string): Promise<boolean> => {
  const authData = await api.get<TAuthDataResponse[]>(API_ENDPOINTS.AUTH).then(({ data }) => data);
  const [admin] = authData;

  const isSuccess = admin?.login === login && admin?.password === password;

  if (isSuccess) {
    const token = Date.now().toString()
    localStorage.setItem('token', token);
  }

  return isSuccess;
};
