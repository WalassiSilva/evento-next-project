import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20 pag-6">
      <div className="relative z-1 flex flex-col lg:flex-row gap-6 lg:gap-16">
        <Skeleton className="h-[201px] w-[300px] rounded-xl border-2 border-white/50 object-cover" />
        <div className="relative flex flex-col gap-4">
          <Skeleton className="h-4 w-44 text-white/75" />
          <Skeleton className="h-11 w-[300px] text-2xl text-white/75" />
          <Skeleton className="h-4 w-[300px] text-white/75" />
          <Skeleton className="h-11 w-[300px] text-white/75" />
        </div>
      </div>
    </section>
  );
}
