import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
        Find events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic text-[#a4f839]">10,000 events</span>{" "}
        around you
      </p>
      <form action="" className="w-full sm:w-[580px]">
        <input
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a4f839]/50  focus:ring-2 focus:bg-white/10 transition"
          type="text"
          placeholder="Search events in any city"
          spellCheck="false"
        />
      </form>
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold transition">
          <Link className="hover:text-white transition" href="/events/austin">
            Austin
          </Link>
          <Link className="hover:text-white transition" href="/events/seattle">
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
