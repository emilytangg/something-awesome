import React from "react";
import { Outlet } from "react-router-dom";

function CTFs() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">My Capture the Flag Solutions</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default CTFs;