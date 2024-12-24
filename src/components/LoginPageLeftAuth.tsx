import ArrowUp from "../assets/icons/small-right.svg";
const LoginPageLeftAuth = () => {
  return (
    <>
      {" "}
      <div className="h-full border-gray border-r lg:flex items-start pt-48 pl-20 justify-end hidden ">
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
              <div className="text-[#0049C6] gap-1 flex items-center justify-start font-bold">
                <img src={ArrowUp} /> 14%
              </div>
              <p className="text-sm">This week</p>
            </div>
          </div>

          <div className="pl-5">
            <p className="font-bold text-sm pb-2">Issues Fixed</p>
            <p className="font-bold text-3xl font-inter">500K+</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 hidden xl:block">
        <img src="/Subtract.png" alt="logo" />
      </div>
    </>
  );
};

export default LoginPageLeftAuth;
