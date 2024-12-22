import Reporitories from "../components/Reporitories";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen items-start">
        <div
          className={` duration-300 relative md:w-[242px] w-0 hidden md:flex border-r border-gray h-full`}
        >
          <Sidebar />
        </div>

        <div
          className="w-full md:p-4 duration-300"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <Navbar />

          <Reporitories />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
