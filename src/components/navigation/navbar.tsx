import { useState } from "react";
import { Button } from "../ui/button";
import {
  LanguagesIcon,
  MoonIcon,
  MenuIcon,
  XIcon
} from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <nav>
      <div className="container flex justify-between items-center py-6">
        <a className="text-2xl font-bold" href="/">JALU</a>
        <div className={`fixed top-0 right-0 bottom-0 bg-white lg:static lg:bg-transparent lg:min-h-0 flex flex-col w-full p-4 min-h-screen lg:p-0 lg:flex-row transition-all ${showMenu ? "left-0"  : "left-[-100%]"}`}>
          <Button className="self-end lg:hidden" variant="ghost" onClick={toggleShowMenu}>
            <XIcon/>
          </Button>
          <ul className="flex flex-col gap-y-8 self-center items-center justify-center w-full lg:mt-0 mt-8 lg:flex-row lg:gap-y-0 lg:gap-x-8">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/works">Works</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <Button className="lg:hidden" variant="ghost" onClick={toggleShowMenu}>
            <MenuIcon />
          </Button>
          <Button className="hidden lg:block" variant="outline" >
            <LanguagesIcon />
          </Button>
          <Button className="hidden lg:block" variant="outline">
            <MoonIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
