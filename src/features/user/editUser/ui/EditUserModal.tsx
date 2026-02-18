import { ReactNode, useEffect, useRef } from 'react';
import { Form, Input, Modal, Space } from 'antd';

import { type TUserData } from 'entities/users';
import { MODAL_WIDTH } from 'shared/consts';
import { ModalButton, ModalFooter } from 'shared/ui';

import { useEditUser } from '../model/useEditUser';

type TEditUserForm = Omit<TUserData, 'id'>;

interface TProps {
  user: TUserData | null;
  open: boolean;
  handleClose: () => void;
  deleteButton?: ReactNode;
}

export const EditUserModal = ({ user, open, handleClose, deleteButton }: TProps) => {
  const [form] = Form.useForm<TEditUserForm>();
  const { mutate: editUser, isLoading: isUserEditing } = useEditUser();
  const initialValuesRef = useRef<string>('');

  useEffect(() => {
    if (user) {
      const values = {
        name: user.name,
        avatar: user.avatar
      };
      form.setFieldsValue(values);
      initialValuesRef.current = JSON.stringify(values);
    }
  }, [user, form]);

  if (!user) return null;

  const handleSubmit = (values: TEditUserForm) => {
    if (initialValuesRef.current === JSON.stringify(values)) {
      handleClose();
      return;
    }

    editUser(
      { id: user.id, ...values },
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
      title="Редактирование пользователя"
      open={open}
      onCancel={handleClose}
      footer={null}
      width={MODAL_WIDTH}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div>
          <Form.Item label="id">
            <Input value={user.id} disabled />
          </Form.Item>

          <Form.Item
            name="name"
            label="Имя"
            required={false}
            rules={[{ required: true, message: 'Введите имя пользователя' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="avatar"
            label="Ссылка на аватарку"
            required={false}
            rules={[{ required: true, message: 'Вставьте ссылку на аватарку' }]}
          >
            <Input />
          </Form.Item>
        </div>

        <ModalFooter justify="space-between">
          {deleteButton}

          <Space>
            <ModalButton type="primary" htmlType="submit" loading={isUserEditing}>
              Сохранить
            </ModalButton>
            <ModalButton type="primary" onClick={handleClose}>
              Отмена
            </ModalButton>
          </Space>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
