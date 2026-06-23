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

  const index = chapters.findIndex((c) => c.id === chapterId);
  const prevId = index > 0 ? chapters[index - 1].id : undefined;
  const nextId = index < chapters.length - 1 ? chapters[index + 1].id : undefined;

  return <ChapterPage chapter={chapter} prevId={prevId} nextId={nextId} />;
}
