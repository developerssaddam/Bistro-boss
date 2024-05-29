import loginBgImg from "../../assets/others/loginbg.png";
import loginImg from "../../assets/others/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // load captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // handleCaptchaMatch
  const handleCaptchaMatch = (e) => {
    const userInputCaptcha = e.target.value;
    if (validateCaptcha(userInputCaptcha)) {
      setDisabled(false);
      Swal.fire({
        icon: "success",
      });
    } else {
      setDisabled(true);
      Swal.fire({
        text: "Captcha not match!",
        icon: "error",
      });
    }
  };

  // handleLoginUserWith Email and password
  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // validation here
    if (!email || !password) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "All fields are required",
      });
      return;
    }

    // Login
    loginUser(email, password)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        location?.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: `${error.message}`,
        });
      });
  };

  return (
    <div style={{ backgroundImage: `url(${loginBgImg})` }} className="py-28">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 md:flex-row py-20 lg:px-5 shadow-2xl">
        <img className="max-h-[550px]" src={loginImg} alt="" />

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-800 shadow-md">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleLoginUser} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">
                <LoadCanvasTemplate />
              </label>
            </div>

            <div className="space-y-1 text-sm">
              <input
                type="text"
                onBlur={handleCaptchaMatch}
                placeholder="Type here!"
                className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-700 focus:border-violet-400"
              />
            </div>

            <input
              className="block btn text-white bg-[#DBB884] w-full p-3 text-center rounded-sm"
              type="submit"
              value="Sign in"
              disabled={disabled}
            />
          </form>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <SocialLogin />
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Don't have an account?
            <Link
              to="/register"
              className="underline text-[#DBB884] font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
