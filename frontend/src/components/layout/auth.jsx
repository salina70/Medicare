import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      className="grid h-screen w-screen grid-cols-7 overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: "url('/login.jpg')",
      }}
    >
      <div className="col-span-4 " />

      <div className="col-span-3 flex items-center justify-center overflow-y-auto p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
