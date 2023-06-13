import { useEffect } from "react";
import AuthForm from "./AuthForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div
      className="
      flex 
      min-h-[calc(100vh-150px)]
      max-h-[calc(100vh-150px)]
      flex-col 
      justify-center 
      py-12 
      sm:px-6 
      lg:px-8 
      bg-gray-100
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="
          mt-6 
          text-center 
          text-3xl 
          font-bold 
          tracking-tight 
          text-gray-900
        "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
