import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { lists } from "../Content";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <>
      {" "}
      <div className={` bg-[#ffffff] border-b md:hidden border-gray`}>
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
                className={`relative border-b border-gray duration-200 pb-3`}
              >
                {lists.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full font-inter  font-medium  items-center gap-2 p-2 pl-4 "
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
    </>
  );
};

export default Navbar;