import React from "react";
import { Outlet } from "react-router-dom";
const ContentLayout = () => {
  return (
    <main className="absolute top-0 left-0 h-full w-full flex-col px-6 py-3">
      <Outlet />
    </main>
  );
};

export default ContentLayout;
