"use client";
import React, { useState } from "react";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import { useDispatch, useSelector } from "react-redux";
import { activateSidebar, deactivateSidebar } from "@/store/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarActive = useSelector((state) => state.sidebar.isSidebarActive);

  const openSidebar = () => {
    dispatch(activateSidebar());
  };
  const closeSidebar = () => {
    dispatch(deactivateSidebar());
  };
  return (
    <aside
      id="main_sidebar"
      onMouseOver={openSidebar}
      onMouseOut={closeSidebar}
      style={{ width: isSidebarActive ? "300px" : "75px" }}
    >
      <SidebarBody />
      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
