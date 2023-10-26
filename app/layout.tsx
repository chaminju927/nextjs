import type { Metadata } from "next";
import "../css/index.css";

export const metadata: Metadata = {
  title: "Pine Work",
  description: "with nextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
