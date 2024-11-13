import { Button } from "../ui/button";
import {
  LanguagesIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-4 backdrop-blur">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center">
            <a className="text-2xl font-bold" href="/">
              Jalu
            </a>
            <ul className="absolute bottom-0 left-0 right-0 top-0 flex hidden h-[100vh] flex-col items-center justify-center space-y-16 bg-white lg:static lg:flex lg:flex-row lg:items-baseline lg:space-x-8 lg:space-y-0 lg:h-auto">
              <li className="absolute right-0 top-0 mr-8 mt-8 lg:hidden">
                <Button variant="ghost">
                  <XIcon />
                </Button>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Contact</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <Button variant="ghost" className="block lg:hidden">
            <MenuIcon />
          </Button>
          <div className="hidden lg:flex lg:space-x-2">
            <Button variant="ghost">
              <MoonIcon />
            </Button>
            <Button variant="ghost">
              <LanguagesIcon />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
