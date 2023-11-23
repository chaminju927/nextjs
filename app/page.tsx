import MainComponent from "../components/MainComponent";
import React, { Suspense } from "react";
import Loading from "./calendar/loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "./global-error";

export default function Page(): JSX.Element {
  return (
    <>
      <MainComponent />
    </>
  );
}
