import "./globals.css";
import type { Metadata } from "next";
import { Bagel_Fat_One } from "next/font/google";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const bagel = Bagel_Fat_One({
  weight: "400",           // ✅ Must match a supported weight
  subsets: ["latin"],      // ✅ Required
  variable: "--font-bagel" // ✅ If you're using Tailwind custom font
});

const ginto = localFont({
  src: [
    {
      path: "../public/fonts/Ginto Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Ginto Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Ginto Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ginto",

});

export const metadata: Metadata = {
  title: "maxcabd | Portfolio",
  description: "Personal portfolio website of maxcabd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${bagel.variable} ${ginto.variable} font-ginto antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
