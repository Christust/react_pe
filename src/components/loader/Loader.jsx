import React from "react";
import { MaterialUIContext } from "../../providers/MaterialUIContext";

const Loader = () => {
  const components = React.useContext(MaterialUIContext);
  return (
    <div className="d-flex justify-content-center">
      <components.CircularProgress disableShrink className="loader" />
      <div className="modal-backdrop best_zind"></div>
    </div>
  );
};

export default Loader;
