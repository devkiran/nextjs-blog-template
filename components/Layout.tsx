import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="m-auto flex h-screen max-w-5xl flex-col bg-gray-50">
      <Header />
      <div className="flex-grow px-5 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
