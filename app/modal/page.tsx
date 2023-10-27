import type { Metadata } from "next";
import "../../css/index.css";
import ModalComponent from "./ModalComponent";

// export const metadata: Metadata = {
//   title: "Pine Work",
//   description: "with nextJS",
// };

export default function Layout(): JSX.Element {
  return (
    <html lang="en">
      <ModalComponent />
    </html>
  );
}
