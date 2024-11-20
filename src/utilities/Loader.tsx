import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress size={"10rem"} />
    </div>
  );
};

export default Loader;
