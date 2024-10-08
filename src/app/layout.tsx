import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description:
    "Apollo Gears is a ride shared's website. Here you can easily rent cars and bike for ride. Explore for more information about the Apollo Gears.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        Footer
      </body>
    </html>
  );
}
