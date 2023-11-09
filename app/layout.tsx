import "../css/index.css";
import React from "react";
import Providers from "./providers";

export default function RootLayout({
  children, //page.tsx 에서 가져온 자식노드
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
