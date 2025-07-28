"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useStoreUserEffect from "@/hooks/use-store-user";
import BarLoader from "react-spinners/BarLoader";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Header() {
  const path = usePathname();
  const { isLoading } = useStoreUserEffect();

  if (path.includes("/editor")) {
    return null;
  }
  return (
    <header className="relative rounded-full py-4 px-8 flex items-center justify-between bg-[#A855F7]/20 max-w-4xl mx-auto ">
      <div className="flex items-center">
        <Image
          src="/retouchly-image.png"
          width={150}
          height={100}
          alt="Retouchly"
        />
      </div>

      <nav className="flex items-center gap-6">
        <ul className="flex gap-4 text-white font-medium text-lg">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="relative">
        <Unauthenticated>
          <SignInButton className="text-white mr-4">Login</SignInButton>
          <SignUpButton>
            <Button className="bg-[#EC4899]/80 rounded-full font-semibold text-lg text-white hover:bg-[#EC4899]/90 px-4 py-4 transition-colors cursor-pointer">
              Register
            </Button>
          </SignUpButton>
        </Unauthenticated>
        <Authenticated>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "bg-[#A855F7]/20 rounded-full w-[50px]",
              },
            }}
          />
        </Authenticated>
      </div>
      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full z-40 flex justify-center">
          <BarLoader width={`95%`} color="#ec4899" />
        </div>
      )}
    </header>
  );
}
