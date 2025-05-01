import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getMoodById } from "@/app/lib/moods";
import { getJournalEntry } from "@/actions/journal";
import EditButton from "./_components/Edit-Btn";
import DeleteDialog from "./_components/Delete-Dialog";

export default async function JournalEntryPage({ params }) {
  const { id } = await params;
  const entry = await getJournalEntry(id);
  const mood = getMoodById(entry.mood);

  return (
    <>
      {/* Header with Mood Image */}
      {entry.moodImageUrl && (
        <div className="relative h-48 md:h-96 w-full">
          <Image
            src={entry.moodImageUrl}
            alt="Mood visualization"
            className="object-contain"
            fill
            priority
          />
        </div>
      )}

      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-5xl md:text-6xl font-semibold gradient-title">
                  {entry.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <EditButton entryId={id} />
              <DeleteDialog entryId={id} />
            </div>
          </div>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2">
            <Link href={`/collection/${entry.collection.id}`}>
              <Badge>Collection: {entry.collection.name}</Badge>
            </Link>
            <Badge>Feeling {mood?.label}</Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="ql-snow bg-white w-full min-h-8 rounded-md p-2">
          <div
            className="ql-editor text-md"
            dangerouslySetInnerHTML={{ __html: entry.content }}
          />
        </div>

        {/* Footer */}
        <div className="text-sm text-gray-500 pt-4">
          Last updated {format(new Date(entry.updatedAt), "PPP 'at' p")}
        </div>
      </div>
    </>
  );
}
