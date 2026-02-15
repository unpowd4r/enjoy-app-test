import { Avatar, Card } from 'antd';

import { type TUserData } from '../model/types';

export interface TProps {
  name: TUserData['name'];
  avatar: TUserData['avatar'];
  date: string;
  onClick?: () => void;
}

export const UserCard = ({ name, avatar, date, onClick }: TProps) => {
  return (
    <Card hoverable onClick={onClick}>
      <Card.Meta
        avatar={<Avatar size={60} src={avatar} alt={name} />}
        title={name}
        description={`Зарегистрирован ${date}`}
      ></Card.Meta>
    </Card>
  );
};
