import { env } from "../../lib/env";
import { Button } from "../ui/button";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#f1ddc9] bg-[#fffaf2]/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 p-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#ff6b4a] to-[#ff9d7a] shadow-[0_8px_20px_-10px_rgba(217,72,40,0.8)]" />
          <span className="text-xl font-extrabold text-[#26170e]">{env.appName}</span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-[#5a3e29] text-sm font-medium whitespace-nowrap">
          <a href="tel:+1234567890" className="hover:underline" aria-label="Call us at +1 (234) 567-890">
            +1 (234) 567-890
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:info@restaurant.com" className="hover:underline" aria-label="Email us at info@restaurant.com">
            info@restaurant.com
          </a>
        </div>

        {/* Navigation and CTA */}
        <nav className="flex items-center gap-2 flex-wrap">
          <Navbar />
          <Button
            variant="secondary"
            className="hidden sm:inline-flex bg-[#fff2e2] text-[#26170e] hover:bg-[#ffe7cf] focus-visible:outline-offset-2"
            aria-label="Start a Build"
          >
            Start a Build
          </Button>
        </nav>
      </div>
    </header>
  );
}
