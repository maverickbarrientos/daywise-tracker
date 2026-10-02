import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Create account | Daywise Tracker",
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-12">
      <section className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <Link className="text-sm font-semibold tracking-tight text-primary" href="/">
          daywise
        </Link>
        <h1 className="mt-8 text-2xl font-semibold tracking-tight">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          One place for bills, groceries, and everyday essentials.
        </p>
        <div className="mt-7">
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
