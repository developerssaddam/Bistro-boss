import loginBgImg from "../../assets/others/loginbg.png";
import loginImg from "../../assets/others/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, logoutUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // handleRegisterUser
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, photo, password } = data;
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Swal.fire({
            text: "You have register successfully!",
            icon: "success",
          });
          logoutUser();
          navigate("/login");
        });
      })
      .catch((error) => {
        Swal.fire({
          text: `${error.message}`,
          icon: "error",
        });
      });
    reset();
  };

  // Social Login common function
  const socialLogin = (loginMethods) => {
    loginMethods()
      .then(() => {
        Swal.fire({
          text: "Login Successfull!",
          icon: "success",
        });
        location?.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: `${error.message}`,
          icon: "error",
        });
      });
  };

  // handleLoginWithGoogle
  const handleLoginWithGoogle = () => {
    socialLogin(loginWithGoogle);
  };

  // handleLoginWithGithub
  const handleLoginWithGithub = () => {
    socialLogin(loginWithGithub);
  };

  return (
    <div style={{ backgroundImage: `url(${loginBgImg})` }} className="py-28">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 md:flex-row py-20 lg:px-5 shadow-2xl">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-800 shadow-md">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Email</label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}

              {errors.email?.type === "pattern" && (
                <span className="text-red-500">Invalid Email!</span>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Photo</label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
              {errors.photo && (
                <span className="text-red-500">Photo is required</span>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}

              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be 6 characters
                </span>
              )}

              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password must be one upper case one lowercase one special
                  characters and one number!
                </span>
              )}
            </div>

            <input
              className="block btn text-white bg-[#DBB884] w-full p-3 text-center rounded-sm"
              type="submit"
              value="Sign up"
            />
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Sign up with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleLoginWithGoogle}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>

            <button
              onClick={handleLoginWithGithub}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link
              to="/login"
              className="underline text-[#DBB884] font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>

        <img className="max-h-[550px]" src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Register;
