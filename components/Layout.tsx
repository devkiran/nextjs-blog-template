import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="m-auto h-full max-w-5xl bg-gray-50">
      <Header />
      <div className="px-5 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
