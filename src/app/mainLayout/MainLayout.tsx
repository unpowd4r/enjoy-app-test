import { Outlet } from 'react-router-dom';

import { Sidebar } from 'widgets/sidebar';

import { Layout, PageContainer } from './MainLayout.styles';

export const MainLayout = () => {
  return (
    <Layout>
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Sidebar />
    </Layout>
  );
};
