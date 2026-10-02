import {
  CalendarDays,
  ReceiptText,
  ShoppingBasket,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import tracker from "@/data/tracker.json";
import { TrackerSection } from "@/components/tracker-section";

const sections = [
  {
    title: "Bills",
    description: "Payments to keep an eye on.",
    itemCount: tracker.bills.length,
    icon: ReceiptText,
    iconClassName: "bg-emerald-100 text-emerald-800",
  },
  {
    title: "Groceries",
    description: "Things to pick up for home.",
    itemCount: tracker.groceries.length,
    icon: ShoppingBasket,
    iconClassName: "bg-amber-100 text-amber-800",
  },
  {
    title: "Necessities",
    description: "Everyday essentials to remember.",
    itemCount: tracker.necessities.length,
    icon: Sparkles,
    iconClassName: "bg-sky-100 text-sky-800",
  },
];

const totalItems = sections.reduce((total, section) => total + section.itemCount, 0);

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-border/70 pb-5">
          <Link
            aria-label="Daywise Tracker home"
            className="flex items-center gap-3"
            href="/"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <CalendarDays aria-hidden="true" className="size-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">daywise</span>
          </Link>
          <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            PERSONAL TRACKER
          </span>
        </header>

        <section
          aria-labelledby="page-title"
          className="flex flex-col gap-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-primary">
              A little more headspace
            </p>
            <h1
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              id="page-title"
            >
              Keep your day in view.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Bills, groceries, and everyday necessities, gathered in one
              simple place.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-3 text-sm shadow-sm">
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-medium">{totalItems}</span>
            <span className="text-muted-foreground">
              {totalItems === 1 ? "item tracked" : "items tracked"}
            </span>
          </div>
        </section>

        <section aria-label="Your tracker categories">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">
              Your essentials
            </h2>
            <span className="text-xs text-muted-foreground">3 categories</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <TrackerSection key={section.title} {...section} />
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-border/70 pt-5 text-xs text-muted-foreground">
          A calmer place for the things that matter day to day.
        </footer>
      </div>
    </main>
  );
}
