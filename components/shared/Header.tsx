import Link from "next/link";
import { ToggleDarkMode } from "../ToggleDarkMode";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
            className="dark:invert"
          />
        </Link>
        <SignedIn>
          <nav className="w-full hidden md:flex-center">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3 items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full text-white">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;
