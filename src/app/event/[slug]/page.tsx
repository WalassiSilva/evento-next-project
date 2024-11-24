
import H1 from "@/components/H1";
import { getEvent } from "@/lib/util";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}
export default async function EventPage({ params }: Props) {
  const { slug } = params;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex  justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          fill
          priority
          quality={50}
          alt={event.name}
          className="object-cover blur-3xl z-0"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="relative z-1 flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover mx-auto"
          />
          <div className="relative flex flex-col items-center ">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="mt-5 bg-white/20 bg-blur textlg capitalize w-[80vw] rounded-md border-white/10 border-2 py-2 focus:scale-105 state-effects
              sm:w-full
              lg:mt-auto"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionTitle>Event details</SectionTitle>
          <SectionText>{event.description}</SectionText>
        </Section>
        <Section>
          <SectionTitle>Location</SectionTitle>
          <SectionText>{event.location}</SectionText>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-10">{children}</section>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white max-w-4xl mx-auto ">
      {children}
    </p>
  );
}
