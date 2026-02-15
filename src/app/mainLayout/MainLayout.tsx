import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/header';

import { Layout, PageContainer } from './MainLayout.styles';

export const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Layout>
  );
};
