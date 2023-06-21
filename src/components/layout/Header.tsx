import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";

import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./Header.module.scss";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbarHandler = () => {
    setOpenNavbar((prevState) => (prevState = !prevState));
  };

  const closeNavbarHandler = () => {
    setOpenNavbar(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-content"]}>
        <div className={classes["header-logo"]}>
          <Link href="/" onClick={closeNavbarHandler}>
            <Image
              src="/images/logo/logo-header.png"
              alt="Header Logo Image"
              width={93}
              height={26}
            />
          </Link>
        </div>
        <div className={classes["mobile-view"]}>
          <div className={classes["header-actions"]}>
            <button
              className={classes["toggle-navbar-button"]}
              onClick={toggleNavbarHandler}>
              {openNavbar ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <Navbar
            className={!openNavbar && classes["navbar-hide"]}
            closeNavbarHandler={closeNavbarHandler}
          />
        </div>
        <div className={classes["desktop-view"]}>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
