import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-8xl font-bold gradient-title">404</h1>
      <h2 className="text-6xl font-semibold text-green-950">Page Not Found</h2>
      <Link href="/" className="mt-5">
        <Button variant="journal" className="cursor-pointer">Return Home</Button>
      </Link>
    </div>
  );
}