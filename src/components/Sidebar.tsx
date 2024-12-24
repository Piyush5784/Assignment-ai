import DownIcon from "../assets/icons/chevron-down.svg";
import { lists } from "../Content";
import HomeIcon2 from "../assets/icons/home2.svg";
import { Link } from "react-router";
import SignOutIcon from "../assets/icons/sign-out.svg";

import SupportIcon from "../assets/icons/phone.svg";
const Sidebar = () => {
  return (
    <>
      <div className="flex justify-between flex-col text-[#414651] ">
        <div className="flex flex-col">
          <Link
            to={"/"}
            className="h-12 w-full flex  p-7 pl-4 items-center justify-start gap-3"
          >
            <img src="/logo.png" height={25} width={25} alt="logo" />
            <p className=" font-inter text-xl font-light Satoshi">CodeAnt AI</p>
          </Link>
          <div className="flex items-center justify-center">
            <div className={`relative w-[88%] `}>
              <input
                type="text"
                placeholder="UtkarshDhairyaPanwar"
                className="border shadow-xs text-ellipsis leading-tight placeholder:text-[#181D27]  overflow-hidden p-2 py-1.5 font-normal text-[0.83rem] border-[#D5D7DA] text-[#181D27] rounded-lg w-full  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] pr-10"
              />
              <img
                src={DownIcon}
                className="absolute pr-1.5 text-[#181D27] right-2 top-1/2 transform -translate-y-1/2 "
              />
            </div>
          </div>

          <div className="p-2">
            {lists.slice(0, 5).map((list, idx) => (
              <div
                key={idx}
                className={`flex w-full  font-inter cursor-pointer border border-[#ffffff]  rounded-lg  ${
                  list.title !== "Repositories" && "hover:bg-[#dfedff]"
                } font-medium items-center gap-2 p-2 pl-4 ${
                  list.title === "Repositories" && "bg-[#1570EF] rounded-lg "
                }`}
              >
                <div className="text-[#ffffff]">
                  {list.title === "Repositories" ? (
                    <img src={HomeIcon2} alt="Home" width={20} height={20} />
                  ) : (
                    list.icon
                  )}
                </div>
                <p
                  className={`font-semibold text-sm ${
                    list.title === "Repositories"
                      ? "text-[#ffffff]"
                      : "text-[#414651]"
                  }`}
                >
                  {list.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" p-6 pr-2 pl-2 font-semibold ">
          <div className="flex gap-2 pl-4  cursor-pointer rounded-lg  py-2 hover:bg-[#dfedff] items-center ">
            <img src={SupportIcon} alt="SupportIcon" />
            Support
          </div>
          <Link
            to={"/"}
            className="flex rounded-lg gap-2 pl-4 cursor-pointer py-2 items-center hover:bg-[#dfedff]"
          >
            <img src={SignOutIcon} alt="" />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
