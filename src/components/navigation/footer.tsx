import { Separator } from "@/components/ui/separator";
import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container max-w-screen-lg">
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-y-4 py-8 md:flex-row">
          <p>© Copyright 2024, Jalu Satriani Wijaya</p>
          <div>
            <a
              className="flex gap-x-2"
              href="mailto:jalusatrianiwijaya1@gmail.com"
            >
              <MailIcon />
              <span>jalusatrianiwijaya1@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
