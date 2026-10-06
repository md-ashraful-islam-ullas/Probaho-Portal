
import React from "react";

const LoadingPage = () => {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-end gap-1.5 h-8">
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-bounce" />
      </div>
    </main>
  );
};

export default LoadingPage;

