import React from "react";
import { IconType } from "../interfaces/Common";
import Rating from "@mui/material/Rating";

const Icon = ({ label, children, ratingValue }: IconType) => {
  return (
    <>
      <div className="icon-set">
        <span>{label}</span>
        {children}
      </div>

      {ratingValue ? (
        <Rating name="read-only" value={ratingValue} disabled />
      ) : null}
    </>
  );
};

export default Icon;
