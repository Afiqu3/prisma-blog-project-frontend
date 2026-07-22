import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-24 text-center dark:bg-slate-900 sm:py-32 lg:px-8">
      <div className="space-y-4">
        {/* Error Code Bubble */}
        <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold tracking-wide text-destructive dark:bg-blue-950/50 dark:text-blue-400">
          404 Error
        </p>

        {/* Core Messaging */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto max-w-md text-base text-slate-600 dark:text-slate-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Check the URL or
          click below to return home.
        </p>

        {/* Navigation Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="/"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Go back home
          </Link>
          <Link
            href="/support"
            className="rounded-lg border border-slate-200 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800/50 transition-colors"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
