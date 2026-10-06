'use client'
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-8xl md:text-9xl font-black tracking-tight text-red-600/20">
          404
        </p>

        <h1 className="mt-2 text-3xl md:text-4xl font-bold">
          Page not found
        </h1>

        <p className="mt-4 text-base-content/60 leading-relaxed">
          দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা আর এখানে নেই।
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn bg-red-600 hover:bg-red-700 text-white border-none px-6"
          >
            হোমপেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-ghost px-6"
          >
            আগের পাতায় যান
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

