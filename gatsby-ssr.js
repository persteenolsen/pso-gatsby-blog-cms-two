import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      as="image"
      href="/images-components/softwareone.jpg"
    />,
  ]);
};
