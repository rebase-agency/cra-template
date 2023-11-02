import { Helmet } from "react-helmet";
import React from "react";

export const CoreHead = () => {
  return (
    <Helmet>
      <title>CRA template</title>
      <meta property="og:title" content="CRA template" />
      <meta name="description" content="" />
      <meta property="og:description" content="" />
    </Helmet>
  );
};
