import "./globals.css";
import type { Metadata } from "next";
import { Bagel_Fat_One, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const bagel = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
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

const friends = localFont({
  src: [

    {
      path: "../public/fonts/Friends SemiBold.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Friends UltraBold.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-friends",
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
      <body
        className={`${bagel.variable} ${garamond.variable} ${ginto.variable} ${friends.variable} font-friends antialiased`}
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