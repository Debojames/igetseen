import Link from "next/link";
import { Logo } from "./logo";
import { NAV } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t hairline bg-[#08080E] px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
            Done-for-you websites for local businesses. Built fast, built clean,
            built to be found — on Google and in AI search.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            Explore
          </p>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-dim transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/start"
                className="text-sm font-medium text-brand-soft transition-colors hover:text-cream"
              >
                Start your website
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            Contact
          </p>
          <a
            href="mailto:hello@igetseen.com"
            className="text-sm text-dim transition-colors hover:text-cream"
          >
            hello@igetseen.com
          </a>
          <p className="mt-2 text-sm text-faint">Serving local businesses across the US.</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-2 border-t hairline pt-6 text-xs text-faint sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} iGetSeen. All rights reserved.</p>
        <p>Get found. Get customers. Get seen.</p>
      </div>
    </footer>
  );
}
