"use client";

import { useState } from "react";
import Link from "next/link";
import type { Chapter, WorkbookPart } from "@/lib/workbookTypes";
import PromptRenderer from "./PromptRenderer";
import TextAreaField from "./TextAreaField";

interface ChapterPageProps {
  chapter: Chapter;
  prevId?: string;
  nextId?: string;
}

type FieldValues = Record<string, string | string[]>;

function initFieldValues(chapter: Chapter): FieldValues {
  const values: FieldValues = {};

  for (const part of chapter.parts) {
    for (const field of part.prompts) {
      values[field.id] = field.type === "checkboxGroup" ? [] : "";
    }
  }

  if (chapter.reflection) {
    for (const q of chapter.reflection) {
      values[q.id] = "";
    }
  }

  return values;
}

// ----------------------------------------------------------------
// Sub-components
// ----------------------------------------------------------------

function Quote({ text }: { text: string }) {
  return (
    <blockquote className="mb-6 rounded-2xl bg-amber-50 px-6 py-4 text-xl font-semibold italic leading-snug text-amber-800">
      &ldquo;{text}&rdquo;
    </blockquote>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
      {text}
    </p>
  );
}

function PartCard({
  part,
  values,
  onFieldChange,
}: {
  part: WorkbookPart;
  values: FieldValues;
  onFieldChange: (id: string, value: string | string[]) => void;
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
      {/* Part title */}
      <h2 className="mb-5 text-2xl font-bold text-indigo-700">{part.title}</h2>

      {/* Background */}
      {part.background && part.background.length > 0 && (
        <div className="mb-5 space-y-2">
          {part.background.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-gray-700">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Part-level quote */}
      {part.quote && <Quote text={part.quote} />}

      {/* Bullet points */}
      {part.bulletPoints && part.bulletPoints.length > 0 && (
        <ul className="mb-5 space-y-1">
          {part.bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-lg text-gray-700">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* Numbered list (part-level) */}
      {part.numberedList && part.numberedList.length > 0 && (
        <ol className="mb-5 space-y-2">
          {part.numberedList.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-gray-700">
              <span className="shrink-0 font-bold text-indigo-500">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      )}

      {/* Principles */}
      {part.principles && part.principles.length > 0 && (
        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          {part.principles.map((principle, i) => (
            <div key={i} className="rounded-xl bg-indigo-50 px-4 py-3">
              <p className="font-bold text-indigo-700">{principle.title}</p>
              <p className="text-base text-gray-700">{principle.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Think About It — leading questions */}
      {part.leadingQuestions && part.leadingQuestions.length > 0 && (
        <div className="mb-5 rounded-xl bg-amber-50 px-5 py-4">
          <SectionLabel text="Think About It" />
          <ul className="space-y-2">
            {part.leadingQuestions.map((q, i) => (
              <li key={i} className="flex gap-2 text-lg text-amber-900">
                <span aria-hidden="true">💡</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Example table */}
      {part.exampleTable && (
        <div className="mb-5 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-left text-base">
            <thead className="bg-indigo-600 text-white">
              <tr>
                {part.exampleTable.headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {part.exampleTable.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-800">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Freeform examples */}
      {part.examples && part.examples.length > 0 && (
        <div className="mb-5">
          <SectionLabel text="Examples" />
          <div className="grid gap-2 sm:grid-cols-2">
            {part.examples.map((example, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
              >
                {Object.entries(example).map(([key, val]) => (
                  <p key={key} className="text-base text-gray-800">
                    <span className="font-semibold capitalize text-gray-500">
                      {key}:{" "}
                    </span>
                    {val}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Good / Poor examples */}
      {(part.goodExamples || part.poorExamples) && (
        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          {part.goodExamples && part.goodExamples.length > 0 && (
            <div className="rounded-xl bg-green-50 px-4 py-4">
              <SectionLabel text="Good Examples" />
              <ul className="space-y-2">
                {part.goodExamples.map((item, i) => (
                  <li key={i} className="flex gap-2 text-base text-green-900">
                    <span aria-hidden="true">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {part.poorExamples && part.poorExamples.length > 0 && (
            <div className="rounded-xl bg-rose-50 px-4 py-4">
              <SectionLabel text="Poor Examples" />
              <ul className="space-y-2">
                {part.poorExamples.map((item, i) => (
                  <li key={i} className="flex gap-2 text-base text-rose-900">
                    <span aria-hidden="true">❌</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Comparisons */}
      {part.comparisons && part.comparisons.length > 0 && (
        <div className="mb-5 space-y-3">
          <SectionLabel text="Compare" />
          {part.comparisons.map((comparison, i) => (
            <div key={i} className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl bg-rose-50 px-4 py-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">
                  Avoid
                </p>
                <p className="text-base text-rose-900">{comparison.weak}</p>
              </div>
              <div className="rounded-xl bg-green-50 px-4 py-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-600">
                  Better
                </p>
                <p className="text-base text-green-900">{comparison.better}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prompts */}
      {part.prompts.length > 0 && (
        <div className="mt-6 space-y-6 border-t border-gray-100 pt-6">
          {part.prompts.map((field) => (
            <PromptRenderer
              key={field.id}
              field={field}
              value={values[field.id] ?? (field.type === "checkboxGroup" ? [] : "")}
              onChange={(val) => onFieldChange(field.id, val)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

// ----------------------------------------------------------------
// Main component
// ----------------------------------------------------------------

export default function ChapterPage({ chapter, prevId, nextId }: ChapterPageProps) {
  const [values, setValues] = useState<FieldValues>(() =>
    initFieldValues(chapter)
  );

  function handleChange(id: string, value: string | string[]) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation bar */}
      <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <div className="flex gap-2">
            <Link
              href="/"
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/workbook"
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Contents
            </Link>
          </div>
          <div className="flex gap-2">
            {prevId ? (
              <Link
                href={`/workbook/${prevId}`}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                ← Previous
              </Link>
            ) : (
              <span className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-300">
                ← Previous
              </span>
            )}
            {nextId ? (
              <Link
                href={`/workbook/${nextId}`}
                className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Next →
              </Link>
            ) : (
              <span className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-300">
                Next →
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Chapter header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-wide">
            Chapter {chapter.chapterNumber}
          </span>
          {chapter.sectionTitle && (
            <p className="mb-1 text-lg font-medium text-blue-100">
              {chapter.sectionTitle}
            </p>
          )}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {chapter.title}
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Introduction */}
        <section className="mb-8 space-y-3">
          {chapter.introduction.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Chapter-level quote */}
        {chapter.quote && <Quote text={chapter.quote} />}

        {/* Chapter-level numbered list */}
        {chapter.numberedList && chapter.numberedList.length > 0 && (
          <ol className="mb-8 space-y-2 rounded-xl bg-blue-50 px-6 py-4">
            {chapter.numberedList.map((item, i) => (
              <li key={i} className="flex gap-3 text-lg text-blue-900">
                <span className="shrink-0 font-bold">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        )}

        {/* Parts */}
        <div className="space-y-8">
          {chapter.parts.map((part, i) => (
            <PartCard
              key={i}
              part={part}
              values={values}
              onFieldChange={handleChange}
            />
          ))}
        </div>

        {/* Reflection */}
        {chapter.reflection && chapter.reflection.length > 0 && (
          <section className="mt-8 rounded-2xl bg-violet-50 p-6 sm:p-8">
            <h2 className="mb-1 text-2xl font-bold text-violet-700">
              Reflection
            </h2>
            <p className="mb-6 text-base text-violet-600">
              Take a moment to think about what you learned.
            </p>
            <div className="space-y-6">
              {chapter.reflection.map((q) => (
                <TextAreaField
                  key={q.id}
                  id={q.id}
                  label={q.question}
                  value={(values[q.id] as string) ?? ""}
                  onChange={(val) => handleChange(q.id, val)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Next chapter message */}
        {chapter.nextChapterMessage && (
          <div className="mt-8 rounded-2xl bg-blue-600 px-6 py-5 text-white">
            <p className="text-lg font-medium">{chapter.nextChapterMessage}</p>
          </div>
        )}

        {/* Bottom chapter navigation */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t border-gray-200 pt-6">
          {prevId ? (
            <Link
              href={`/workbook/${prevId}`}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              ← Previous Chapter
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/workbook"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Contents
          </Link>
          {nextId ? (
            <Link
              href={`/workbook/${nextId}`}
              className="rounded-xl bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              Next Chapter →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </main>
    </div>
  );
}
