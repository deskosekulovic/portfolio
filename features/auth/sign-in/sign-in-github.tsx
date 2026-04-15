"use client";

import { GithubIcon } from "@/app/components/GithubIcon";
import { signIn } from "next-auth/react";

const SignInGithub = () => {
  const handleSignIn = async () => {
    await signIn("github", { redirectTo: "/dashboard" });
  };
  return (
    <div className="flex flex-col items-center gap-8 w-full height-40">
      <h1 className="text-2xl font-bold">Sign in to your account</h1>
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={() => void handleSignIn()}
          className="flex items-center justify-center gap-2 w-full hover:bg-gray-100 text-gray-800 px-4 py-4 border border-gray-200 hover:border-gray-300 hover:cursor-pointer rounded-md transition-colors duration-200"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Sign in with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default SignInGithub;
