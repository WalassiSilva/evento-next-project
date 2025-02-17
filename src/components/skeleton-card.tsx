import Skeleton from "@/components/skeleton";
import React from "react";

export default function EventsPageSkeleton() {
  return (
    <main className="flex flex-col items-center px-5 min-h-[110vh]">      
      <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex-1 basis-80 h-[380px] min-w-80 max-w-[500px]">
            <Skeleton className="h-full w-full object-cover" />
          </div>
        ))}
      </section>
    </main>
  );
}