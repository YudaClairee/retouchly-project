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
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Header() {
  const path = usePathname();
  const { isLoading } = useStoreUserEffect();
  const { ref, isInView } = useScrollAnimation({
    margin: "0px",
    threshold: 0,
  });

  if (path.includes("/editor")) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8">
      <motion.header
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-full py-4 px-8 flex items-center justify-between bg-[#A855F7]/20 backdrop-blur-md max-w-4xl w-full mx-4"
      >
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/retouchly-image.png"
            width={150}
            height={100}
            alt="Retouchly"
          />
        </motion.div>

        <motion.nav
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ul className="flex gap-4 text-white font-medium text-lg">
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a
                href="#features"
                className="hover:text-[#EC4899] transition-colors"
              >
                Features
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a href="#" className="hover:text-[#EC4899] transition-colors">
                Pricing
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a href="#" className="hover:text-[#EC4899] transition-colors">
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.nav>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Unauthenticated>
            <SignInButton className="text-white hover:text-[#EC4899] transition-colors">
              Login
            </SignInButton>
            <SignUpButton>
              <Button className="bg-[#EC4899]/80 rounded-full font-semibold text-lg text-white hover:bg-[#EC4899]/90 px-4 py-4 transition-colors cursor-pointer transform hover:scale-105">
                Register
              </Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <Link href="/dashboard">
              <Button className="bg-[#EC4899]/80 rounded-lg font-semibold hover:scale-105 transition-transform">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "!bg-[#A855F7]/20 !rounded-full !size-8",
                },
              }}
            />
          </Authenticated>
        </motion.div>
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={`95%`} color="#ec4899" />
          </div>
        )}
      </motion.header>
    </div>
  );
}
