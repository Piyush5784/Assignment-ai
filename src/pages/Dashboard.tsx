import Reporitories from "../components/Reporitories";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`flex h-screen items-start ${
          showMenu ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        <div
          className={`duration-300 relative md:w-[242px] w-0 hidden md:flex border-r border-gray h-full`}
        >
          <Sidebar />
        </div>

        <div className="w-full md:p-4 duration-300 bg-[#FAFAFA]">
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
          <Reporitories showMenu={showMenu} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
