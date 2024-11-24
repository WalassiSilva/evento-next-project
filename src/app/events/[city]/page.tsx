import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/util";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: { city: string };
};
type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title:
      params.city === "all"
        ? "All Events"
        : `Events in ${capitalize(params.city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();
export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if(!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  return (
    <main className="flex flex-col items-center py-24 px-5 min-h-[110vh]">
      <H1 className="mb-12">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
