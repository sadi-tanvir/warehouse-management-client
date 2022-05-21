import React from "react";
import { Helmet } from "react-helmet-async";

const ReactHelmet = ({title}) => {
  return (
    <>
      <Helmet>
        <title>{title} - Fruits Warehouse Management</title>
      </Helmet>
    </>
  );
};

export default ReactHelmet;
