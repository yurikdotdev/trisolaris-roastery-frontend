import React, { ReactNode } from 'react';
import Footer from '../Footer';
import TopBar from '../TopBar';
import BaseLayout from './BaseLayout';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <BaseLayout className="flex min-h-screen flex-col">
    <TopBar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </BaseLayout>
);

export default MainLayout;
