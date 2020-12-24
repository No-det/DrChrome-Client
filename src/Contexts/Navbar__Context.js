import { createContext, useState } from "react";

export const NavbarContext = createContext();

const Navbar__contextProvider = (props) => {
  const [selected, setSelected] = useState(1);

  return (
    <NavbarContext.Provider value={{ selected, setSelected }}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default Navbar__contextProvider;
