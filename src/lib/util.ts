import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TEvent } from "./types";
import { BASE_URL } from "@/app/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getEvents(city: string) {
  const response = await fetch(`${BASE_URL}/events?city=${city}`);
  const events: TEvent[] = await response.json();
  return events;
}

export async function getEvent(slug: string){
  const response = await fetch(`${BASE_URL}/events/${slug}`);
  const event: TEvent = await response.json();
  return event;
}