import RepoCard from "./RepoCard";

const Reporitories = () => {
  return (
    <>
      <div
        className={`font-inter w-full h-full  pt-4 md:border md:border-gray md:rounded-lg `}
      >
        <div className="pl-3">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <p className="font-semibold text-xl">Repositories</p>
              <p className="font-light text-[0.8rem]">33 total repositories</p>
            </div>
            <div className=" flex gap-2 pt-3 md:pr-3">
              <button className="p-2 py-1.5 border-[1.5px] border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] rounded-md text-sm font-extralight flex items-center justify-center gap-2 hover:bg-gray buttonShadow">
                <img src="/public/icons/refresh.svg" height={15} width={15} />
                Refresh All
              </button>
              <button className="bg-primaryBlue text-white rounded-md p-2 py-1.5 text-sm font-extralight flex items-center justify-center gap-1 hover:bg-[#005eff]">
                <img src="/public/icons/plus.svg" height={13} width={13} />
                Add Repository
              </button>
            </div>
          </div>
          <div className="relative mt-3 w-[95%] md:w-[30%] flex items-center">
            <input
              type="text"
              placeholder="Search Repositories"
              className="hover:bg-gray border-[1.5px] placeholder:text-[#414651] p-2 py-1.5 font-normal text-sm border-[#D5D7DA] text-[#181D27] rounded-lg w-full pl-8 focus:border-primaryBlue"
            />
            <img
              src="/public/icons/search.svg"
              height={15}
              width={15}
              className="absolute left-3 text-[#181D27]"
            />
          </div>
        </div>

        <RepoCard />
      </div>
    </>
  );
};

export default Reporitories;
