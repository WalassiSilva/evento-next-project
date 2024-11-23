import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/util";
import { Metadata } from "next";

type Props = {
  params: { city: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title:
      params.city === "all"
        ? "All Events"
        : `Events in ${capitalize(params.city)}`,
  };
}
export default async function EventsPage({ params: { city } }: Props) {
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1 className="mb-12">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
