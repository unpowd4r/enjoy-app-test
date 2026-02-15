import { Card, Skeleton } from 'antd';

export const UserCardSkeleton = () => {
  return (
    <Card>
      <Card.Meta
        avatar={<Skeleton.Avatar active size={60} />}
        title={<Skeleton.Input active size="small" />}
        description={<Skeleton.Input active size="small" block />}
      />
    </Card>
  );
};
