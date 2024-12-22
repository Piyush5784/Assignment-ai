import { repos } from "../Content";
import databaseIcon from "../assets/icons/database.svg";
const RepoCard = () => {
  return (
    <>
      {" "}
      <div className="mt-4 border-[#D5D7DA] ">
        {repos.map((repo, idx) => (
          <div key={idx} className="hover:bg-[#F5F5F5] cursor-pointer">
            <div className="  flex flex-col pl-3 pt-2  border-t border-[#D5D7DA]">
              <div className="flex gap-2">
                <p className="font-medium ">{repo.name}</p>
                <div className="rounded-full h-6 w-14 flex items-center justify-center border text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF] text-sm">
                  {repo.visiblity}
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-8 py-3">
                <div className="flex items-center gap-2 ">
                  <p className="md:text-[13px]  text-[11.5px] ">
                    {repo.languageUsed}
                  </p>
                  <div className="h-[8px]  w-[8px] rounded-full bg-[#1570EF]"></div>
                </div>{" "}
                <div className="flex items-center gap-2 ">
                  <img
                    src={databaseIcon}
                    alt="database-image"
                    height={12}
                    width={10.5}
                  />
                  <p className="md:text-[13px] text-[11.5px] ">
                    {repo.size} KB
                  </p>
                </div>
                <div>
                  <p className="md:text-[13px] text-[11.5px]">
                    Updated {repo.lastUpdatedDate} days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepoCard;
