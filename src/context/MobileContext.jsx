import { createContext, useState } from "react";

const MobileContext = createContext();

const MobileContextProvider = (props) => {
  const [mobile, setMobile] = useState(false);
  return (
    <MobileContext.Provider value={[mobile, setMobile]}>
      {props.children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
