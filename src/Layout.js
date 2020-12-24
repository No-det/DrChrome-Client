import Navbar from "./Components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "6vw" }}>{children}</div>
    </div>
  );
};

export default Layout;
