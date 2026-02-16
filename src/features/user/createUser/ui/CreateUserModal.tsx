import { Form, type FormProps, Input, Modal } from 'antd';
import styled from 'styled-components';

import { type TUserData } from 'entities/users';
import { MODAL_WIDTH } from 'shared/consts';
import { nowDate } from 'shared/lib/date';
import { colors } from 'shared/styles';
import { ModalButton, ModalFooter } from 'shared/ui';

import { useCreateUser } from '../model/useCreateUser';

type TCreateUserForm = Omit<TUserData, 'id' | 'createdAt'>;

interface TProps {
  open: boolean;
  handleClose: () => void;
}

export const CreateUserModal = ({ open, handleClose }: TProps) => {
  const [form] = Form.useForm<TCreateUserForm>();
  const { mutate: createUser, isLoading } = useCreateUser();

  const handleSubmit = (values: TCreateUserForm) => {
    createUser(
      {
        ...values,
        avatar: values.avatar,
        createdAt: nowDate()
      },
      {
        onSuccess: () => {
          handleClose();
          form.resetFields();
        }
      }
    );
  };

  return (
    <Modal
      title="Создание пользователя"
      open={open}
      onCancel={handleClose}
      footer={null}
      width={MODAL_WIDTH}
    >
      <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Имя"
          rules={[{ required: true, message: 'Введите имя пользователя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Ссылка на аватарку"
          rules={[{ required: true, message: 'Вставьте ссылку на аватарку' }]}
        >
          <Input />
        </Form.Item>

        <ModalFooter justify="flex-end">
          <ModalButton type="primary" onClick={form.submit} loading={isLoading}>
            Создать
          </ModalButton>
          <ModalButton type="primary" onClick={handleClose}>
            Отмена
          </ModalButton>
        </ModalFooter>
      </StyledForm>
    </Modal>
  );
};

const StyledForm = styled(Form)<FormProps<TCreateUserForm>>`
  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-form-item-label {
    padding-bottom: 2px;

    label {
      font-size: 13px;
      color: ${colors.formColor};
    }
  }
`;
