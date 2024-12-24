import LoginPageLeftAuth from "../components/LoginPageLeftAuth";
import LoginPageRightAuth from "../components/LoginPageRightAuth";
const Login = () => {
  return (
    <>
      <div className="h-screen font-inter  flex items-center justify-center w-full gap-20 p-3 md:p-0 duration-200">
        <LoginPageLeftAuth />
        <LoginPageRightAuth />
      </div>
    </>
  );
};

export default Login;
