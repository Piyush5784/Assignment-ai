import { useState } from "react";
import { FaArrowUp, FaBitbucket, FaGithub } from "react-icons/fa";
import Button from "../components/Button";
import { VscAzureDevops } from "react-icons/vsc";
import { LiaKeySolid } from "react-icons/lia";
const Login = () => {
  const [selected, setSelected] = useState<boolean>(true);
  return (
    <>
      <div className="h-screen  flex items-center justify-center w-full gap-20 p-3 pl-0 md:p-0 duration-200">
        <div className="h-full border-gray border-r md:flex items-start pt-48 justify-end hidden ">
          <div className="border  shadow-[0_0_15px_rgba(0,0,0,0.1)] border-gray bg-[#ffffff] rounded-2xl font-inter">
            <div className="flex border-b border-gray p-3 items-center justify-center gap-3">
              <img src="/logo.png" height={30} width={30} alt="logo" />
              <p className="font-bold ">AI to Detect & Autofix Bad Code</p>
            </div>

            <div className="text-center px-8 py-2 flex items-center pb-8 justify-center gap-8 ">
              <div>
                <p className="font-bold">30+</p>
                <p className="text-xs font-light">Language Support</p>
              </div>
              <div>
                <p className="font-bold">10K+</p>
                <p className="text-xs font-light">Developers</p>
              </div>
              <div>
                <p className="font-bold">100K+</p>
                <p className="text-xs font-light">Hours Saved</p>
              </div>
            </div>
          </div>

          <div className="border  p-2 w-56 shadow-[0_0_15px_rgba(0,0,0,0.1)] relative top-32 right-48 border-gray flex flex-col justify-center bg-[#ffffff] rounded-3xl font-inter ">
            <div className="flex justify-between px-5 pb-2 pt-2 ">
              <div className="h-14 w-14 flex items-center justify-center  rounded-full bg-[#9D90FA40]">
                {" "}
                <img src="Vector.png" className="h-6 w-6" alt="graph" />
              </div>
              <div>
                <div className="text-primaryBlue flex items-center justify-start font-bold">
                  <FaArrowUp /> 14%
                </div>
                <p className="text-sm">This week</p>
              </div>
            </div>

            <div className="pl-5">
              <p className="font-bold text-sm pb-2">Issues Fixed</p>
              <p className="font-bold text-3xl font-inter">500k+</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center  h-full bg-[#FAFAFA]">
          <div className="border border-gray bg-[#ffffff] rounded-lg ">
            <div className="border-b border-gray flex flex-col md:p-4 md:pt-2 p-2  items-center justify-center ">
              <div className="flex items-center justify-center gap-2 p-8 pt-2">
                <img src="/logo.png" height={30} width={30} alt="logo" />
                <p className="text-2xl font-light ">CodeAnt AI</p>
              </div>

              <p className="font-bold md:text-3xl text-xl font-inter pb-5 ">
                Welcome to CodeAnt AI
              </p>

              <div className="border-gray bg-[#FAFAFA] border rounded-lg flex">
                <button
                  onClick={() => setSelected(true)}
                  className={`md:px-28 px-14 md:py-[1rem] py-1 font-inter  rounded-lg text-white duration-300 font-bold ${
                    selected
                      ? "bg-primaryBlue"
                      : "text-secondaryBlack hover:bg-gray-100"
                  }  `}
                >
                  SASS
                </button>
                <button
                  onClick={() => setSelected(false)}
                  className={` w-40 md:w-64 md:py-1 py-2 text-lg text-center  rounded-lg text-white duration-300 font-bold ${
                    !selected
                      ? "bg-primaryBlue"
                      : "text-secondaryBlack hover:bg-gray-100"
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
                    icon={
                      <VscAzureDevops size={24} className="text-[#1570EF]" />
                    }
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
            <span className="font-bold"> Privacy Policy</span>.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 hidden md:block">
        <img src="/Subtract.png" alt="logo" />
      </div>
    </>
  );
};

export default Login;
