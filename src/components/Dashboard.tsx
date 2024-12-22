import { useState } from "react";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuMenu, LuRefreshCw } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { lists } from "../Content";
import { FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <>
      <div className="flex h-screen items-start">
        <div
          className={` duration-300 relative md:w-80 w-0 hidden md:flex border-r border-gray h-full`}
        >
          this is sidebar{" "}
        </div>

        <div className="w-full">
          <div
            className={` bg-[#ffffff]  ${
              showMenu && "border-b"
            } md:hidden border-gray`}
          >
            <div className="flex border-b border-gray ">
              <div className="h-12 w-full flex  p-3 items-center justify-start gap-3">
                <img src="/logo.png" height={25} width={25} alt="logo" />
                <p className=" font-inter text-xl font-light">CodeAnt AI</p>
              </div>
              <div
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center justify-center pr-4"
              >
                {showMenu ? <RxCross2 size={24} /> : <LuMenu size={24} />}
              </div>
            </div>

            <div
              className={`fixed  duration-200 ${
                showMenu ? "top-12" : "-top-96"
              }  bg-[#ffffff]  w-full  z-50`}
            >
              <div className="">
                <div
                  className={`relative flex duration-200 flex-col ${
                    !showMenu ? "bottom-96" : "bottom-0"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div
                      className={`relative w-[96%] `}
                      onClick={() => setShowSuggestions(!showSuggestions)}
                    >
                      <input
                        type="text"
                        placeholder="UtkarshDhairyaPanwar"
                        className="border shadow-xs placeholder:text-[#181D27] p-2 py-1.5 font-normal text-[0.8rem] border-[#D5D7DA] text-[#181D27] rounded-lg w-full  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] pr-10"
                      />
                      {showSuggestions ? (
                        <IoChevronDownOutline className="absolute text-[#181D27] right-2 top-1/2 transform -translate-y-1/2 " />
                      ) : (
                        <IoChevronUpOutline className="absolute text-[#181D27] right-2 top-1/2 transform -translate-y-1/2 " />
                      )}
                    </div>
                  </div>

                  <div
                    className={`relative border-b border-gray duration-200  `}
                  >
                    {lists.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full font-inter  font-medium  items-center gap-2 p-2 pl-4"
                      >
                        <div>{item.icon}</div>
                        <p className="font-semibold text-[0.8rem] text-[#414651]">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={` font-inter w-full h-full pl-3 pt-4`}>
            <p className="font-semibold text-xl">Repositories</p>
            <p className="font-light text-[0.8rem]">33 total repositories</p>

            <div className=" flex gap-2 pt-3">
              <button
                className="p-2 py-1.5 border-[1.5px] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-md text-sm font-extralight flex items-center justify-center gap-2 "
                style={{ boxShadow: "inset 1 2px 4px rgba(1, 1, 1, 0.05)" }}
              >
                <LuRefreshCw />
                Refresh All
              </button>
              <button className="bg-primaryBlue text-white rounded-md p-2 py-1.5  text-sm font-extralight flex items-center justify-center gap-1">
                <FiPlus size={16} />
                Add Repository
              </button>
            </div>

            <div className="relative mt-3 w-[95%] flex items-center">
              <input
                type="text"
                placeholder="Search Repositories"
                className="border-[1.5px] placeholder:text-[#414651] p-2 py-1.5 font-normal text-sm border-[#D5D7DA] text-[#181D27] rounded-lg w-full pl-8 focus:border-primaryBlue"
              />
              <IoSearchOutline className="absolute left-3 text-[#181D27]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
