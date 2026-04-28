import { env } from "../../lib/env";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-gray-300 bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="flex flex-col space-y-2 text-sm text-gray-700">
          <p><strong>Restaurant Name</strong></p>
          <address className="not-italic">
            123 Main Street<br />
            Anytown, USA 12345<br />
            Phone: (123) 456-7890
          </address>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://facebook.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.6 9.8v-6.9H8v-2.9h2.4V9.7c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .1 2 .1v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4v1.7h2.4l-.4 2.9h-2v6.9A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.4a9.72 9.72 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.49A13.89 13.89 0 0 1 1.64 2.16 4.9 4.9 0 0 0 3.2 9.72a4.92 4.92 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42 9.85 9.85 0 0 1-6.1 2.1A10.38 10.38 0 0 1 1 19.15 14 14 0 0 0 7.29 21c8.55 0 13.22-7.1 13.22-13.22 0-.2 0-.42-.02-.63A9.38 9.38 0 0 0 23 3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/restaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm8.71 2.29a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
        &copy; {year} {env.appName}. All rights reserved.
      </div>
    </footer>
  );
}