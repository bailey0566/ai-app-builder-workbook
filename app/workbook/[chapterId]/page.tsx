import { chapters, getChapterById } from "@/content/chapters";
import ChapterPage from "@/components/ChapterPage";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default async function WorkbookChapterPage({ params }: PageProps) {
  const { chapterId } = await params;
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    notFound();
  }

  const prevId =
    chapter.chapterNumber > 1
      ? `chapter-${String(chapter.chapterNumber - 1).padStart(2, "0")}`
      : undefined;

  const nextId =
    chapter.chapterNumber < 15
      ? `chapter-${String(chapter.chapterNumber + 1).padStart(2, "0")}`
      : undefined;

  return <ChapterPage chapter={chapter} prevId={prevId} nextId={nextId} />;
}
