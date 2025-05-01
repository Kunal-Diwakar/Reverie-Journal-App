import Link from "next/link";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function WriteLayout({ children }) {
  return (
    <div className="px-4 py-4">
      <div className="mb-4">
        <Link
          href="/dashboard"
          className="text-md font-semibold text-orange-600 hover:text-orange-700"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <Suspense fallback={<BarLoader color="green" width={"100%"} />}>
        {children}
      </Suspense>
    </div>
  );
}
