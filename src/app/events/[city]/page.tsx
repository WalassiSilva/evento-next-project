import React from "react";

export default function EventsPage({
  params: { city },
}: {
  params: { city: string };
}) {
  return <main>EventsPage - {city.toLocaleUpperCase()}</main>;
}
