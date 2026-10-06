"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [show, setShow] = useState(false);

  const handleUpdateuser = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries()) as { name: string };

    await authClient.updateUser({
      ...newUser,
    });

    setShow(false);
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center text-center">
            {user?.image && (
              <div className="avatar mb-4">
                <div className="w-24 rounded-full">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            )}

            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-base-content/60">{user?.email}</p>
          </div>

          <div className="divider" />

          <div className="space-y-4">
            <div>
              <p className="text-sm text-base-content/60">Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/60">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/60">Email Status</p>
              {user?.emailVerified ? (
                <span className="badge badge-success">Verified</span>
              ) : (
                <span className="badge badge-warning">Not Verified</span>
              )}
            </div>

            <div>
              <p className="text-sm text-base-content/60">Member Since</p>
              <p className="font-medium">
                {user?.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="divider" />

          <button
            type="button"
            onClick={handleShowForm}
            className="btn btn-outline w-full"
          >
            {show ? "Cancel" : "Change Name"}
          </button>

          {show && (
            <form onSubmit={handleUpdateuser} className="mt-4">
              <label className="label" htmlFor="name">
                Change Name
              </label>

              <div className="flex gap-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.name}
                  className="input w-full"
                  placeholder="Enter your name"
                />

                <button type="submit" className="btn btn-neutral">
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;