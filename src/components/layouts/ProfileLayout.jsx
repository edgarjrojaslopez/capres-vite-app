import React from "react";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="bg-azul-capres-600 rounded-lg border p-10 font-bold text-white shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
