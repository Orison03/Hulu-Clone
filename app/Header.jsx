import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import HeaderIcon from "./HeaderIcon";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { BsCollection } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-16 h-auto mb-4">
      {/* Icons */}
      <div className="flex justify-evenly pt-4 md:pb-2">
        <HeaderIcon title="home" Icon={AiOutlineHome} />
        <HeaderIcon title="trending" Icon={BiTrendingUp} />
        <HeaderIcon title="verified" Icon={GoVerified} />
        <HeaderIcon title="collection" Icon={BsCollection} />
        <HeaderIcon title="search" Icon={AiOutlineSearch} />
        <HeaderIcon title="account" Icon={MdOutlineAccountCircle} />
      </div>
      {/* logo */}
      <div className="cursor-pointer">
        <Image src={logo} alt="logo" className="object-contain" />
      </div>
    </header>
  );
};

export default Header;
