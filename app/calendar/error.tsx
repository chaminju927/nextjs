"use client"; // Error components must be Client Components

import { PropsWithChildren, useEffect } from "react";

export default function Error({
  error,
  reset,
  props,
}: {
  error: Error & { digest?: string };
  //error: Error;
  reset: () => void;
  props: PropsWithChildren;
}): React.ReactNode {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
