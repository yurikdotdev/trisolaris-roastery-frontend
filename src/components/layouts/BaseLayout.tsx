import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BaseLayout: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div
    className={`container mx-auto bg-custom-bgLight font-roboto text-custom-textLight dark:bg-custom-bgDark dark:text-custom-textDark ${className}`}
  >
    {children}
  </div>
);

export default BaseLayout;
