import { getDailyPrompt } from "@/actions/public";
import CardRenderer from "@/components/CardRenderer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const advice = await getDailyPrompt();

  return (
    <>
      <div className="relative container mx-auto px-4 pt-4 md:pt-8 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title font-bold">
            Your Story To Write. <br /> Your Story To Tell.
          </h1>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-4 max-full mx-auto">
              <div className="border-b border-green-100 pb-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5 text-green-900" />
                  <span className="text-green-900 font-medium">
                    Today&rsquo;s Entry
                  </span>
                </div>

                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-300" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="space-y-4 py-4">
                <h3 className="text-xl font-semibold text-green-900">
                  {advice ? advice : "My Thoughts Today !"}
                </h3>
                <Skeleton className="h-4 bg-green-100 rounded w-3/4" />
                <Skeleton className="h-4 bg-green-100 rounded w-full" />
                <Skeleton className="h-4 bg-green-100 rounded w-2/3" />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="journal"
                className="px-8 py-6 rounded-full flex items-center gap-1"
              >
                Start Writing
              </Button>
            </Link>

            <Link href="#features">
              <Button variant="secondary" className="px-8 py-6 rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="px-4 mx-auto text-center mt-24 showreel">
          <div className="mb-2">
            <video
              autoPlay
              loop
              muted
              controls
              width="1600"
              height="900"
              src="/showreel.mp4"
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-green-900 leading-[1]">
              Advantages Of Journaling !
            </p>

            <p
              className="text-lg font-medium text-green-900 leading-[1]"
              id="features"
            >
              Credits: psych2Go
            </p>
          </div>
        </div>

        <div className="mt-24 pb-16 mx-auto px-4">
          <CardRenderer />
        </div>

        <div className="mt-20">
          <div className="bg-green-50 h-[80vh] lg:h-[70vh] rounded-2xl">
            <div className="p-12 flex flex-col gap-5 items-center text-center">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold gradient-title mb-6 tracking-tight">
                Start Your Journaling Journey Today !
              </h2>

              <p className="text-lg md:text-xl font-medium mb-6 w-[70%] md:w-[60%] text-center">
                Start your journey of self-expression with Reverie. Reflect,
                create, and grow—all while ensuring your privacy. Unlock
                inspiration and embrace meaningful journaling today!
              </p>

              <Link href="/dashboard">
                <Button
                  className="animate-bounce cursor-pointer"
                  variant="journal"
                  size="lg"
                >
                  Get Started !
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
