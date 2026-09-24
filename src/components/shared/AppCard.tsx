
import Image from "next/image";
import Link from "next/link";
import { Download, Star, Smartphone } from "lucide-react";
import { TApp } from "@/types/app.type";



type TAppProps = {
    app: TApp;
}

const AppCard = ({ app }: TAppProps) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Top Section */}
      <div className="flex gap-4">

        {/* App Image */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-24 sm:w-24">
          <Image
            src={app.image}
            alt={app.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="96px"
          />
        </div>

        {/* App Info */}
        <div className="min-w-0 flex-1">

          <h2 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            {app.title}
          </h2>

          <p className="mt-1 truncate text-sm font-medium text-blue-600">
            {app.companyName}
          </p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 dark:bg-amber-500/10">
              <Star
                size={14}
                className="fill-amber-400 text-amber-400"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {app.ratingAvg}
              </span>
            </div>

            <span className="text-xs text-slate-400">
              ({app.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 rounded-xl bg-slate-50 py-3 dark:divide-slate-700 dark:bg-slate-800/60">

        <div className="text-center">
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {app.downloads}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Downloads
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {app.size} MB
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Size
          </p>
        </div>

        <div className="text-center">
          <p className="flex items-center justify-center gap-1 text-sm font-bold text-slate-800 dark:text-white">
            <Smartphone size={14} />
            Android
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Platform
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {app.description}
      </p>

      {/* Bottom */}
      <div className="mt-5 flex items-center gap-3">

        <Link
          href={`/apps/${app.id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]"
        >
          View Details
        </Link>

        <button
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-500/10"
          aria-label="Download app"
        >
          <Download size={18} />
        </button>

      </div>
    </div>
  );
};

export default AppCard;

