import { IoChevronDownOutline } from "react-icons/io5";
import { lists } from "../Content";
import HomeIcon2 from "../assets/icons/home2.svg";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-12 w-full flex  p-7 pl-4 items-center justify-start gap-3">
          <img src="/logo.png" height={25} width={25} alt="logo" />
          <p className=" font-inter text-xl font-light">CodeAnt AI</p>
        </div>
        <div className="flex items-center justify-center">
          <div className={`relative w-[88%] `}>
            <input
              type="text"
              placeholder="UtkarshDhairyaPanwar"
              className="border shadow-xs placeholder:text-[#181D27] p-2 py-1.5 font-normal text-[0.83rem] border-[#D5D7DA] text-[#181D27] rounded-lg w-full  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] pr-10"
            />
            <IoChevronDownOutline className="absolute text-[#181D27] right-2 top-1/2 transform -translate-y-1/2 " />
          </div>
        </div>

        <div className="p-2">
          {lists.slice(0, 5).map((list, idx) => (
            <div
              key={idx}
              className={`flex w-full font-inter cursor-pointer font-medium items-center gap-2 p-2 pl-4 ${
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
                className={`font-semibold text-[0.8rem] ${
                  list.title === "Repositories" && "text-[#ffffff]"
                }`}
              >
                {list.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
