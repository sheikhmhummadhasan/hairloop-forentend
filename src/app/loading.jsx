import React from "react";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircle
              size={22}
              className="text-gray-400"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white">
          Loading...
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          Please wait while we prepare everything for you.
        </p>

        <div className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;