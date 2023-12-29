import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-dotted-pattern dark:bg-black bg-cover bg-fixed bg-center bg-primary-50 ">
      {children}
    </div>
  );
};

export default Layout;
