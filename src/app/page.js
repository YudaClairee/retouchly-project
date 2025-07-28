import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./_components/hero-section";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#171834] min-h-screen py-10 font-[var(--font-inter)]">
      <header className="rounded-full py-4 px-8 flex items-center justify-between bg-[#A855F7]/20 max-w-4xl mx-auto ">
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
        <div>
          <SignedOut>
            <SignInButton className="text-white mr-4">Login</SignInButton>
            <SignUpButton>
              <Button className="bg-[#EC4899]/80 rounded-full font-semibold text-lg text-white hover:bg-[#EC4899]/90 px-4 py-4 transition-colors cursor-pointer">
                Register
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "bg-[#A855F7]/20 rounded-full size-12",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>
      <main className="max-w-5xl mx-auto mt-18 px-4">
        <HeroSection />
      </main>
      <section></section>
    </div>
  );
}
