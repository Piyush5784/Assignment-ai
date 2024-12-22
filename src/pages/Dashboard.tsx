import Reporitories from "../components/Reporitories";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen items-start">
        <div
          className={` duration-300 relative md:w-80 w-0 hidden md:flex border-r border-gray h-full`}
        >
          this is sidebar{" "}
        </div>

        <div className="w-full md:p-4 duration-300">
          <Navbar />

          <Reporitories />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
