import { chapter01 } from "./chapter-01";
import { chapter02 } from "./chapter-02";
import { chapter03 } from "./chapter-03";
import { chapter04 } from "./chapter-04";
import { chapter05 } from "./chapter-05";
import { chapter06 } from "./chapter-06";
import { chapter07 } from "./chapter-07";
import { chapter08 } from "./chapter-08";
import { chapter09 } from "./chapter-09";
import { chapter10 } from "./chapter-10";
import { chapter11 } from "./chapter-11";
import { chapter12 } from "./chapter-12";
import { chapter13 } from "./chapter-13";
import { chapter14 } from "./chapter-14";
import { chapter15 } from "./chapter-15";

import type { Chapter } from "@/lib/workbookTypes";

export const chapters: Chapter[] = [
  chapter01,
  chapter02,
  chapter03,
  chapter04,
  chapter05,
  chapter06,
  chapter07,
  chapter08,
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter15,
];

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === id);
}
