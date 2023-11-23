import "../../../css/index.css";
import React from "react";
import ModalComponent from "../../../components/ModalComponent";

// return 안에 html태그 또오면 안됨 hydration error발생
export default function Layout(): JSX.Element {
  return (
    <div>
      <ModalComponent />
    </div>
  );
}
