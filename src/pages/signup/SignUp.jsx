import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();

  // email, password, confirm password, name
  // camelCase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [name, setName] = useState("");

  // handle sign up an account

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // check dieu kien
      if (email.length < 10) {
        alert("Email must be at least 10 characters");
        return;
      }
      // chrck password
      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }
      if (password !== confirmPassword) {
        alert("Password and Confirm Password must be the same");
        return;
      }
      if (!name || name.length < 1) {
        alert("Name is required and name must be at least 1 character");
        return;
      }
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        alert("Sign Up Successfully");
        navigate("/login");
      } else {
        alert("Sign Up Failed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-[#B3FFAE] flex flex-1 justify-center items-center h-screen">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">
          Sign Up An Account
        </h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              // e.target.value la gia tri ma user dang nhap trong o input
            }}
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Re Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="name" className="text-sm font-medium cursor-pointer">
            Display Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <p
            onClick={() => {
              navigate("/login");
            }}
            className="text-blue-500 underline ml-2 cursor-pointer"
          >
            Sign In
          </p>
        </div>
        <button
          onClick={(e) => {
            handleSignUp(e);
          }}
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
