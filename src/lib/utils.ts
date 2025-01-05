import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (string: string) => {
  return `${string.charAt(0).toLocaleUpperCase()}${string.slice(1)}`;
};

export const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getEvents = async (city: string, page: number = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  if (!events) {
    return notFound();
  }

  return { events, totalCount };
};

export const getEvent = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
};
