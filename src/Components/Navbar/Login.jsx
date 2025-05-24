import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthContext from "../../Provider/AuthContext";
import DocumentTitle from "../Others/DocumentTitle";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
//   console.log(location.pathname);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((res) => {
        // console.log(res);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  DocumentTitle("Login");
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl dark:bg-gray-500">
        <div className="card-body py-12">
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-semibold text-center pb-5 border-b border-gray-300 dark:text-gray-800">
              Login Your Account
            </h2>
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Email Address"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2 dark:text-gray-800">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none dark:text-gray-800"
              placeholder="Password"
              required
            />
           
              {error && (
                <p className="text-red-600 text-sm font-semibold dark:text-gray-800">{error}</p>
              )}
            
            <div className="pt-3 underline text-sm cursor-pointer dark:text-gray-800">
              Forgot password?
            </div>
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Login
            </button>
            <p className="text-center pt-5 dark:text-gray-800">
              Dont’t Have An Account ?{" "}
              <Link to="/auth/register" className="text-orange-600">
                Register
              </Link>
            </p>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-active w-full bg-orange-400"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>{" "}
            SignIn With Google
          </button>
          <button className="btn btn-neutral w-full ">
            <span className="text-xl">
              <FaGithub />
            </span>{" "}
            SignIn With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
