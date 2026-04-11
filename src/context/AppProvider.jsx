import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [installed, setInstalled] = useState([]);
  const info = {
    installed,
    setInstalled,
  };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export default AppProvider;
