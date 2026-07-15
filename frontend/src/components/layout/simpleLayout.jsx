import Header from "./header";
import { Outlet } from "react-router-dom";

const SimpleLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SimpleLayout;
