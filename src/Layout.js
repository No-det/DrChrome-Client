import Navbar from "./Components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "6vw" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
