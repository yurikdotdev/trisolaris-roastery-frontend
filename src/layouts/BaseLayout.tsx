import React, { useEffect } from 'react';
import { ScrollRestoration } from 'react-router-dom';

interface BaseLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  title,
  children,
  className = '',
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div
      className={`container mx-auto bg-custom-bgLight font-roboto text-custom-textLight dark:bg-custom-bgDark dark:text-custom-textDark ${className}`}
    >
      <ScrollRestoration />
      <hr className="dark:border-custom-accent-dark border-t-2 border-custom-accent" />
      {children}
    </div>
  );
};

export default BaseLayout;
