import { useEffect } from 'react';
import { Form, type FormProps, Input, Modal, Space } from 'antd';
import styled from 'styled-components';

import { type TUserData } from 'entities/users';
import { DeleteUserButton } from 'features/user/deleteUser/ui/DeleteUserButton';
import { MODAL_WIDTH } from 'shared/consts';
import { ModalButton, ModalFooter } from 'shared/ui';

import { useEditUser } from '../model/useEditUser';

type TEditUserForm = Omit<TUserData, 'id'>;

interface TProps {
  user: TUserData | null;
  open: boolean;
  handleClose: () => void;
}

export const EditUserModal = ({ user, open, handleClose }: TProps) => {
  const [form] = Form.useForm<TEditUserForm>();
  const { mutate: editUser, isLoading: isUserEditing } = useEditUser();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        avatar: user.avatar
      });
    }
  }, [user, form]);

  if (!user) return null;

  const handleSubmit = (values: TEditUserForm) => {
    editUser(
      { id: user.id, ...values },
      {
        onSuccess: () => {
          handleClose();
        }
      }
    );
  };

  const handleDeleteSuccess = () => {
    handleClose();
  };

  return (
    <Modal
      title="Редактирование пользователя"
      open={open}
      onCancel={handleClose}
      footer={null}
      width={MODAL_WIDTH}
    >
      <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
        <div>
          <Form.Item label="id">
            <Input value={user.id} disabled />
          </Form.Item>

          <Form.Item name="name" label="Имя">
            <Input />
          </Form.Item>

          <Form.Item name="avatar" label="Ссылка на аватарку">
            <Input />
          </Form.Item>
        </div>

        <ModalFooter justify="space-between">
          <DeleteUserButton userId={user.id} onSuccess={handleDeleteSuccess} />

          <Space>
            <ModalButton type="primary" htmlType="submit" loading={isUserEditing}>
              Сохранить
            </ModalButton>
            <ModalButton type="primary" onClick={handleClose}>
              Отмена
            </ModalButton>
          </Space>
        </ModalFooter>
      </StyledForm>
    </Modal>
  );
};

const StyledForm = styled(Form)<FormProps<TEditUserForm>>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .ant-form-item {
    margin-bottom: 8px;
  }
`;
