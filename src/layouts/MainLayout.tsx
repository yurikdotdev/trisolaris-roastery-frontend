import React, { ReactNode } from 'react';
import Footer from '../components/footer/Footer';
import TopBar from '../components/header/TopBar/TopBar';
import BaseLayout from './BaseLayout';

interface MainLayoutProps {
  title: string;
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => (
  <BaseLayout title={title} className="flex min-h-screen w-full flex-col">
    <TopBar />
    <div className="flex w-full flex-grow items-center justify-center px-4 sm:px-8">
      <main className="w-full max-w-7xl">{children}</main>
    </div>
    <Footer />
  </BaseLayout>
);

export default MainLayout;
