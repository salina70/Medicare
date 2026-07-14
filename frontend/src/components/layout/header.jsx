import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../ui/atoms/Logo";
import Input from "../../components/ui/atoms/Input";
import AuthButton from "../../components/pageComponents/auth/AuthButton";

function Header() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-40 flex my-4 items-center justify-between bg-[#16171D] px-4 py-2">
        <div>
          <Logo />
        </div>
        <div className="flex justify-center h-full w-fit gap-5">
          <Input rightIcon={<CiSearch />} />
          <AuthButton />
        </div>
      </div>
    </>
  );
}

export default Header;
