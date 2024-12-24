import RepoCard from "./RepoCard";
import plusIcon from "../assets/icons/plus.svg";
import RefreshIcon from "../assets/icons/refresh.svg";
import SearchIcon from "../assets/icons/search.svg";
const Reporitories = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <>
      <div
        className={`font-inter ${
          showMenu ? "bg-[#6C6C6C4D]" : "bg-[#ffffff]"
        } w-full h-full  pt-4 md:border md:border-gray md:rounded-lg  `}
      >
        <div className="pl-3">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <p className="font-semibold text-xl">Repositories</p>
              <p className=" text-[0.8rem] font-normal">
                33 total repositories
              </p>
            </div>
            <div className=" flex gap-2 pt-3 md:pr-3">
              <button className="p-2 py-1.5 border-[1.5px] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-md text-sm font-normal flex items-center  justify-center gap-2 hover:bg-gray buttonShadow text-[#414651] whitespace-nowrap">
                <img src={RefreshIcon} height={15} width={15} />
                Refresh All
              </button>
              <button className="bg-primaryBlue text-white rounded-md p-2 py-1.5 text-sm font-normal flex items-center justify-center gap-1 hover:bg-[#005eff] whitespace-nowrap">
                <img src={plusIcon} height={13} width={13} />
                Add Repository
              </button>
            </div>
          </div>
          <div className="relative mt-3 w-[366px] md:w-[30%] flex items-center">
            <input
              type="text"
              placeholder="Search Repositories"
              className="hover:bg-gray border-[1.5px] text-base placeholder:text-[#414651] p-2 py-1.5 font-normal text-sm border-[#D5D7DA] text-[#414651] rounded-lg w-full pl-8 focus:border-primaryBlue"
            />
            <img
              src={SearchIcon}
              height={15}
              width={15}
              className="absolute left-3 text-[#181D27]"
            />
          </div>
        </div>

        <RepoCard showMenu={showMenu} />
      </div>
    </>
  );
};

export default Reporitories;
