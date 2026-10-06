"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    // console.log(user)
    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      console.log(data);
      redirect("/");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-base-200 px-4 py-10">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-8 shadow-xl">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-sm text-base-content/60 mt-1">
              Fill in the details below to get started
            </p>
          </div>

          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input w-full"
            placeholder="Your full name"
          />

          <label className="label mt-2" htmlFor="email">
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
            placeholder="Create a password"
          />

          <button className="btn btn-neutral w-full mt-6" type="submit">
            Sign Up
          </button>

          <p className="text-center text-sm text-base-content/60 mt-4">
            Already have an account?{" "}
            <a href="/sign-in" className="link link-hover font-medium">
              Log in
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
