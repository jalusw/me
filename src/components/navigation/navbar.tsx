import { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ToggleThemeButton } from "../utils/ToggleThemeButton";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="border">
      <div className="container flex max-w-screen-lg items-center justify-between py-4">
        <a className="text-xl font-bold" href="/">
          jalusw
        </a>
        <div
          className={`fixed bottom-0 right-0 top-0 flex min-h-screen w-full flex-col bg-white p-4 transition-all dark:bg-neutral-950 lg:static lg:min-h-0 lg:flex-row lg:bg-transparent lg:p-0 ${showMenu ? "left-0" : "left-[-100%]"} lg:transition-none`}
        >
          <Button
            className="self-end lg:hidden"
            variant="ghost"
            onClick={toggleShowMenu}
            title="Close Navigation Menu"
          >
            <XIcon />
          </Button>
          <ul className="mt-8 flex w-full flex-col items-center justify-center gap-y-16 self-center lg:mt-0 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <li>
              <a className="lg:text-md" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="lg:text-md" href="/blog">
                Blogs
              </a>
            </li>
            <li>
              <a className="lg:text-md" href="#">
                Works
              </a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <ToggleThemeButton />
          <Button
            className="lg:hidden"
            variant="ghost"
            onClick={toggleShowMenu}
            title="Open Navigation Menu"
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
