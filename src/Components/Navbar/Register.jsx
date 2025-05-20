import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import AuthContext from "../../Provider/AuthContext";
import DocumentTitle from "../Others/DocumentTitle";

const Register = () => {
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.cheakbox.value;
    // console.log({name, photo, email, password})

    // Cheakbox validation
    if (!terms) {
      setPassError("Please accept our terms and conditons");
      return;
    }
    //Password validation
    const minLength = /^.{6,}$/;
    const digitValid = /(?=.*\d)/;
    const lowerCaseValid = /(?=.*[a-z])/;
    const upperCaseValid = /(?=.*[A-Z])/;

    if (minLength.test(password) === false) {
      setPassError("Password Must Be 6 Charecter and Longer");
      return;
    } else if (digitValid.test(password) === false) {
      setPassError("Password Must have One Numaric Digit!");
      return;
    } else if (lowerCaseValid.test(password) === false) {
      setPassError("Password Must Have At Least One Lowercase Letter");
      return;
    } else if (upperCaseValid.test(password) === false) {
      setPassError("Password Must Have At Least One Uppercase Letter");
      return;
    }


    createUser(email, password)
      .then((result) => {
        const user  = result.user;
        console.log(user);
        updateUser({
            displayName: name,
            photoURL: photo
        })
      })
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        setError("Error:", error.message);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
    .then(res => {
      // console.log(res);
      navigate(`${location.state ? location.state : "/"}`)
    })
    .catch(error => {
      setError(error.message)
    })
  }
  DocumentTitle("Register")
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card bg-base-100 w-full max-w-lg items-center shrink-0 shadow-xl">
        <div className="card-body py-5">
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-semibold text-center pb-5 border-b border-gray-300">
              Register Your Account
            </h2>
            <label className="label text-md font-semibold pt-5 pb-2">
              Your Name
            </label>
            <input
              type="name"
              name="name"
              className="input w-full bg-base-200 border-none"
              placeholder="Your Name"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input w-full bg-base-200 border-none"
              placeholder="Your Photo"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input w-full bg-base-200 border-none"
              placeholder="Email Address"
              required
            />
            <label className="label text-md font-semibold pt-5 pb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-full bg-base-200 border-none"
              placeholder="Password"
              required
            />
            <p className="text-xs pt-1 text-gray-600">Note: Password must have at least 6 charecters & one lowercase, one uppercase and one numaric digit!</p>
            <div className="pt-3">
              <label className="label">
                <input
                  type="checkbox"
                  name="cheakbox"
                  defaultChecked
                  className="checkbox font-semibold"
                />
                Accept Terms & Conditions
              </label>
            </div>
          {
            passError && <p className="text-red-500 font-semibold">{passError}</p>
          }
          {
            error && <p className="text-red-500 font-bold">{error}</p>
          }
            <button type="submit" className="btn btn-primary mt-4 w-full">
              Register
            </button>
            <p className="text-center pt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-orange-600">
                Login
              </Link>
            </p>
          </form>
           <button onClick={handleGoogleSignIn} className='btn btn-active w-full bg-orange-400'><span className='text-xl'><FcGoogle/></span> SignIn With Google</button>
           <button className='btn btn-neutral w-full '><span className='text-xl'><FaGithub/></span> SignIn With GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
