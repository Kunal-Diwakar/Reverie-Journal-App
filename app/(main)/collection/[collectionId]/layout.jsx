import Link from "next/link";

export default function CollectionLayout({ children }) {
  return (
    <>
      <div className="px-4 py-8">
        <div className="mb-4">
          <Link
            href="/dashboard"
            className="text-md font-semibold text-orange-600 hover:text-orange-700"
          >
            ← Back to Dashboard
          </Link>
        </div>
        {children}
      </div>
      ;
    </>
  );
}
