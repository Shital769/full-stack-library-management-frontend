import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  //fetching user from session storage using useEffect Hooks
  const [user, setUser] = useState({});

  useEffect(() => {
    const userPerson = JSON.parse(sessionStorage.getItem("user"));
    if (userPerson) {
      setUser(userPerson);
    }
  }, []);
  return (
    <div className="dashboard-layout">
      <Sidebar currentUser={user} />
      <div className="dashboard-main">
        <Header currentUser={user} />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
