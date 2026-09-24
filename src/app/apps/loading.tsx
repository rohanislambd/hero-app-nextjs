import React from "react";

const AppPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Heading Skeleton */}
      <div className="space-y-4 text-center">
        <div className="skeleton mx-auto h-10 w-48"></div>

        <div className="skeleton mx-auto h-5 w-96 max-w-full"></div>
      </div>

      {/* App Cards Skeleton */}
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
          >
            {/* Image */}
            <div className="skeleton h-48 w-full rounded-xl"></div>

            {/* Title */}
            <div className="skeleton mt-5 h-6 w-3/4"></div>

            {/* Description */}
            <div className="mt-3 space-y-2">
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-5/6"></div>
            </div>

            {/* Bottom section */}
            <div className="mt-5 flex items-center justify-between">
              <div className="skeleton h-5 w-20"></div>

              <div className="skeleton h-9 w-24 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppPageSkeleton;