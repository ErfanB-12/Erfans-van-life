import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1 className="error">Error: {error.message}</h1>
      <pre className="error">
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}
