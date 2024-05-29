import loginBgImg from "../../assets/others/loginbg.png";
import loginImg from "../../assets/others/login.png";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, logoutUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

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
          const userInfo = {
            name: result.user.displayName,
            email: result.user.email,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                text: "You have register successfully!",
                icon: "success",
              });
              logoutUser();
              navigate("/login");
            }
          });
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

          {/* Social Login area */}
          <SocialLogin />

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
