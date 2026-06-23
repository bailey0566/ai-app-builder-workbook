import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-10">
        <h1 className="text-4xl font-bold text-gray-900">AI App Builder Workbook</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn app design step-by-step through 15 guided workbook chapters.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/workbook/chapter-01"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Start Workbook
          </Link>
          <Link
            href="/workbook"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            View All Chapters
          </Link>
        </div>
      </div>
    </main>
  );
}
