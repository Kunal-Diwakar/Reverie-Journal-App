import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FolderOpen, PenBox } from "lucide-react";
import UserMenu from "./User-Menu";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  
  return (
    <div className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-[family-name:var(--font-amarante)] text-3xl text-green-800 tracking-tight ">
            Reverie.
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard#collections">
              <Button variant="secondary" className="flex items-center gap-2">
                <FolderOpen size={18} />
                <span className="hidden md:inline cursor-pointer">Collections</span>
              </Button>
            </Link>
          </SignedIn>

          <Link href="/journal/write">
            <Button
              variant="journal"
              className="flex items-center gap-2 cursor-pointer"
            >
              <PenBox size={18} />
              <span className="hidden md:inline">Write New</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="secondary" className="cursor-pointer">
                Log in
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
