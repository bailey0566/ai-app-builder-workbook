// ----------------------------------------------------------------
// Field Types
// ----------------------------------------------------------------

export type FieldType =
  | "text"
  | "textarea"
  | "checkboxGroup"
  | "radioGroup"
  | "url"
  | "imageUpload"
  | "videoUpload"
  | "audioUpload";

// ----------------------------------------------------------------
// Prompt Field
// A single interactive input rendered inside a WorkbookPart.
// ----------------------------------------------------------------

export interface PromptField {
  type: FieldType;
  id: string;
  label: string;
  /** Required for checkboxGroup and radioGroup. */
  options?: string[];
  /** Optional helper text shown beneath the field. */
  placeholder?: string;
}

// ----------------------------------------------------------------
// Supporting content blocks used inside WorkbookPart
// ----------------------------------------------------------------

export interface ExampleTableRow extends Record<string, string> {}

export interface ExampleTable {
  headers: string[];
  rows: string[][];
}

export interface Principle {
  title: string;
  description: string;
}

export interface Comparison {
  weak: string;
  better: string;
}

// ----------------------------------------------------------------
// Workbook Part
// A named section inside a chapter, containing content + prompts.
// ----------------------------------------------------------------

export interface WorkbookPart {
  title: string;
  background?: string[];
  quote?: string;
  leadingQuestions?: string[];
  bulletPoints?: string[];
  numberedList?: string[];
  exampleTable?: ExampleTable;
  principles?: Principle[];
  comparisons?: Comparison[];
  /**
   * Freeform example objects vary by chapter (e.g. {problem, appIdea},
   * {user, need, feature}, {service, audience}, etc.).
   * Typed as a generic record to avoid constraining chapter authors.
   */
  examples?: Record<string, string>[];
  goodExamples?: string[];
  poorExamples?: string[];
  prompts: PromptField[];
}

// ----------------------------------------------------------------
// Reflection Question
// Shown at the end of a chapter for open-ended written reflection.
// ----------------------------------------------------------------

export interface ReflectionQuestion {
  id: string;
  question: string;
}

// ----------------------------------------------------------------
// Chapter
// Top-level data shape exported from every content/chapters/*.ts file.
// ----------------------------------------------------------------

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  /** Optional subtitle shown in navigation / section headers. */
  sectionTitle?: string;
  introduction: string[];
  quote?: string;
  numberedList?: string[];
  parts: WorkbookPart[];
  reflection?: ReflectionQuestion[];
  nextChapterMessage?: string;
}
