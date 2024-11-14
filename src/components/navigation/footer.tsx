import { MailIcon, PhoneIcon } from "lucide-react";

export default function Footer() {
  return <footer className="py-20 border">
    <div className="container">
      <div className="flex flex-col gap-y-16 lg:gap-y-0 lg:flex-row justify-between">
        <div className="flex-1">
          <h2 className="font-bold text-4xl">jalusw.</h2>
          <p>Kalimantan Selatan/Indonesia</p>
          <ul className="mt-8 space-y-4">
            <li>
              <a className="flex items-center gap-x-2" href="tel:083140691449">
                <PhoneIcon />
                +6283140691449
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-2" href="mailto:jalusatrianiwijaya1@gmail.com">
                <MailIcon />
                jalusatrianiwijaya1@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="">
            <strong>Navigation</strong>
            <ul className="mt-4 flex flex-col space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>;
}
