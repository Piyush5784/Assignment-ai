import { useState } from "react";
import { FaGithub, FaBitbucket } from "react-icons/fa";
import { LiaKeySolid } from "react-icons/lia";
import { VscAzureDevops } from "react-icons/vsc";
import Button from "./Button";

const LoginPageRightAuth = () => {
  const [selected, setSelected] = useState<boolean>(true);
  return (
    <>
      {" "}
      <div className=" flex flex-col items-center justify-center  h-full bg-[#FAFAFA]">
        <div className="border border-gray w-full bg-[#ffffff] rounded-lg  ">
          <div className="border-b border-gray flex flex-col md:p-4 md:pt-2 p-2  items-center justify-center ">
            <div className="flex items-center justify-center gap-2 p-8 pt-2 ">
              <img src="/logo.png" height={30} width={30} alt="logo" />
              <p className="text-2xl  Satoshi ">CodeAnt AI</p>
            </div>
            <p className="font-semibold md:text-3xl text-xl font-inter pb-5 ">
              Welcome to CodeAnt AI
            </p>

            <div className="border-gray bg-[#FAFAFA] border rounded-lg flex">
              <button
                onClick={() => setSelected(true)}
                className={`md:w-[300px] px-14 md:py-4 py-1 font-inter md:text-[1.2rem] rounded-lg text-white duration-300 font-semibold ${
                  selected
                    ? "bg-primaryBlue text-[#ffffff]"
                    : "text-[#414651] hover:bg-gray-100"
                }  `}
              >
                SASS
              </button>
              <button
                onClick={() => setSelected(false)}
                className={` w-40 md:w-[300px] md:py-3 py-2 md:text-[1.2rem] text-center  rounded-lg text-white duration-300 font-semibold ${
                  !selected
                    ? "bg-primaryBlue text-[#ffffff]"
                    : "text-[#414651] hover:bg-gray-100"
                }  `}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className=" flex flex-col pt-6  rounded-lg items-center justify-start h-[320px]">
            {selected ? (
              <div className="flex flex-col gap-4">
                <Button
                  label="Sign in with Github"
                  icon={<FaGithub size={24} />}
                />

                <Button
                  label="Sign in with BitBucket"
                  icon={<FaBitbucket size={24} className="text-[#1570EF]" />}
                />

                <Button
                  label="Sign in with Azure Devops"
                  icon={<VscAzureDevops size={24} className="text-[#1570EF]" />}
                />

                <Button
                  label="Sign in with BitBucket"
                  icon={<img src="/gitlab.png" />}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Button
                  label="Self hosted GitLab"
                  icon={<img src="/gitlab.png" />}
                />

                <Button
                  label="Sign in with SSO"
                  icon={<LiaKeySolid size={24} />}
                />
              </div>
            )}
          </div>
        </div>
        <p className=" font-inter text-center p-3">
          By signing up you agree to the
          <span className="font-semibold"> Privacy Policy</span>.
        </p>
      </div>
    </>
  );
};

export default LoginPageRightAuth;
