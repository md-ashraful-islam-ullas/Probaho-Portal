"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div className="flex justify-center bg-base-200 px-4 py-10">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-8 shadow-xl">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-base-content/60 mt-1">
              Sign in to continue to your account
            </p>
          </div>

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input w-full"
            placeholder="you@example.com"
          />

          <label className="label mt-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input w-full"
            placeholder="Enter your password"
          />

          <div className="mt-2 text-right">
            <a href="#" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-4">
            Sign In
          </button>

          <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={handleGitHubSignIn}
            className="btn btn-outline w-full mt-2"
          >
            Sign in with GitHub
          </button>

          <p className="text-center text-sm text-base-content/60 mt-4">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="link link-hover font-medium">
              Sign up
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
