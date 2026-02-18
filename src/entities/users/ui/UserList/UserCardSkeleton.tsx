import { Card, Skeleton } from 'antd';

import { StyledCard } from '../UserCard.styles';

export const UserCardSkeleton = () => {
  return (
    <StyledCard>
      <Card.Meta
        avatar={<Skeleton.Avatar active size={60} />}
        title={<Skeleton.Input active size="small" />}
        description={<Skeleton.Input active size="small" block />}
      />
    </StyledCard>
  );
};
