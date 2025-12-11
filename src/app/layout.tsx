import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "STAR - School Transport Advanced Routing System",
  description:
    "STAR (School Transport Advanced Routing) is a next-generation bus management system. Optimize school bus routes, track buses in real-time, improve student safety, and manage fleets efficiently.",
  metadataBase: new URL("https://www.yourdomain.com"), // replace with your actual domain
  keywords: [
    "school bus tracking",
    "school transport management",
    "bus routing system",
    "advanced routing software",
    "real-time bus tracking",
    "student safety",
    "fleet management",
    "Next.js school management",
    "Tailwind bus system",
    "school transport optimization",
    "school bus GPS tracking",
  ],
  openGraph: {
    title: "STAR - School Transport Advanced Routing System",
    description:
      "Optimize school bus routes, track buses in real-time, enhance student safety, and manage fleets efficiently with STAR.",
    url: "https://www.yourdomain.com",
    siteName: "STAR School Transport",
    images: [
      {
        url: "/images/og-image.png", // served from public/images
        width: 1200,
        height: 630,
        alt: "STAR - School Transport Advanced Routing System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR - School Transport Advanced Routing System",
    description:
      "Optimize school bus routes, track buses in real-time, and enhance student safety with STAR.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Providers>{children}</Providers>

        {/* Chatbase widget */}
        <Script
          id="chatbase-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...arguments) => {
      if (!window.chatbase.q) { window.chatbase.q = [] }
      window.chatbase.q.push(arguments)
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") { return target.q }
        return (...args) => target(prop, ...args)
      }
    });
  }

  const onLoad = function() {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "VtehIbmkuhyTBxBPoIxvX"; // <- your Chatbase widget ID
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  };

  if (document.readyState === "complete") {
    onLoad();
  } else {
    window.addEventListener("load", onLoad);
  }
})();
          `,
          }}
        />
      </body>
    </html>
  );
}