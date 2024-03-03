import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { TSGhostContentAPI } from "@ts-ghost/content-api";

export const metadata = {
  title: "We Think Agile - Agile coaching for your next project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://wethinkagile.com"),
  themeColor: "#FFF",
};

const api = new TSGhostContentAPI(
    process.env.GHOST_URL || "https://meshfields.ghost.io",
    process.env.GHOST_CONTENT_API_KEY || "62b95affdcfc8605b3e8257888",
    "v5.47.0"
);

export async function getPosts() {
  return await api.posts
      .browse({
        limit: "all"
      })
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
