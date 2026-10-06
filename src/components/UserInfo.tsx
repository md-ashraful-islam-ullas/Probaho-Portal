"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-3">
          <Link href={"/profile"}>
            <div className="flex items-center gap-3 rounded-lg border border-base-300 bg-base-100 px-4 py-2 shadow-sm">
              <div className="leading-tight">
                <p className="text-sm font-semibold">{user?.name}</p>
              </div>
            </div>
          </Link>

          <button onClick={handleSignOut} className="btn btn-outline">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <button className="btn btn-outline">সাইন ইন</button>
          </Link>

          <Link href="/sign-up">
            <button className="btn btn-error">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
