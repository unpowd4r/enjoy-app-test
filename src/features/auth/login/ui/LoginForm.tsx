import { Button, Card, Form, Input } from 'antd';

import { type TLoginCredentials } from '../model/types';
import { useLogin } from '../model/useLogin';

import { AuthTitle, ButtonWrapper } from './LoginForm.styles';

export const LoginForm = () => {
  const { mutate: login, isLoading } = useLogin();
  const [form] = Form.useForm<TLoginCredentials>();

  return (
    <Card>
      <Form form={form} onFinish={login}>
        <AuthTitle>Авторизация</AuthTitle>
        <Form.Item name="login" rules={[{ required: true, message: 'Введите логин' }]}>
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
          <Input type="password" placeholder="Пароль" />
        </Form.Item>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </ButtonWrapper>
      </Form>
    </Card>
  );
};
