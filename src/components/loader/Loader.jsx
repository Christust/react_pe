import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <CircularProgress disableShrink className="loader" />
      <div className="modal-backdrop best_zind"></div>
    </div>
  );
};

export default Loader;
