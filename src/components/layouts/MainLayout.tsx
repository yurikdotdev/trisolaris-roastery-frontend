import React, { ReactNode } from 'react';
import Footer from '../Footer';
import TopBar from '../TopBar';
import BaseLayout from './BaseLayout';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <BaseLayout>
    <TopBar />
    {children}
    <Footer />
  </BaseLayout>
);

export default MainLayout;
