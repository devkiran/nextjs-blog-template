import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="m-auto flex h-full max-w-5xl flex-col">
      <Header />
      <div className="flex-grow  py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
