import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "iGetSeen — Done-for-you websites for local businesses",
    template: "%s · iGetSeen",
  },
  description:
    "Professional websites for restaurants, barbers, salons, cleaners, contractors and local services. Built fast, built clean, built to be found on Google and in AI search. From $299.99.",
  metadataBase: new URL("https://igetseen.com"),
  openGraph: {
    title: "iGetSeen — Get found. Get customers. Get seen.",
    description:
      "Done-for-you websites for local businesses. Live in days, built to convert.",
    url: "https://igetseen.com",
    siteName: "iGetSeen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
