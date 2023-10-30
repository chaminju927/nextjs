import type { Metadata } from "next";
import "../css/index.css";

export const metadata: Metadata = {
  title: "Pine Work",
  description: "with nextJS",
};

export default function RootLayout({
  children, //page.tsx 에서 가져온 자식노드
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
