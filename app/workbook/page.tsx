import Link from "next/link";
import { chapters } from "@/content/chapters";

export default function WorkbookContentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold hover:bg-white/30"
          >
            ← Home
          </Link>
          <h1 className="text-3xl font-bold sm:text-4xl">Workbook Contents</h1>
          <p className="mt-2 text-lg text-blue-100">
            AI App Builder Internship — All Chapters
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <ol className="space-y-3">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                href={`/workbook/${chapter.id}`}
                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-base font-bold text-indigo-700">
                  {chapter.chapterNumber}
                </span>
                <div className="min-w-0">
                  {chapter.sectionTitle && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {chapter.sectionTitle}
                    </p>
                  )}
                  <p className="truncate text-lg font-semibold text-gray-800">
                    {chapter.title}
                  </p>
                </div>
                <span className="ml-auto shrink-0 text-gray-400">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
