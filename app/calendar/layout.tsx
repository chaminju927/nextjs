import TopComponent from "@/components/TopComponent";
import "../../css/index.css";
import React from "react";

export default function CalendarLayout({
  children, //page.tsx 에서 가져온 자식노드
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
