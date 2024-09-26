import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apollo Gears",
  description:
    "Apollo Gears is a ride shared's website. Here you can easily rent cars and bike for ride. Explore for more information about the Apollo Gears.",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Admin sidebar
      {children}
    </div>
  );
}
