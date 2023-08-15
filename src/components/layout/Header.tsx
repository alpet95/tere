import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";
import MaxWidthContainer from "./MaxWidthContainer";
import { HeaderDataType } from "@/types/header";

import { FaBars, FaTimes } from "react-icons/fa";
import classes from "./Header.module.scss";

interface HeaderProps {
  data: HeaderDataType;
}

const Header = (props: HeaderProps) => {
  const { data } = props;
  const items = data["navbar-items"];

  const [openNavbar, setOpenNavbar] = useState(false);

  const preventPageScrolling = useCallback(() => {
    document.body.style.overflow = openNavbar ? "hidden" : "unset";
  }, [openNavbar]);

  useEffect(() => {
    preventPageScrolling();

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openNavbar, preventPageScrolling]);

  const toggleNavbarHandler = () => {
    setOpenNavbar((prevState) => (prevState = !prevState));
  };

  const closeNavbarHandler = () => {
    setOpenNavbar(false);
  };

  return (
    <header className={classes.header}>
      <MaxWidthContainer>
        <div className={classes["header-content"]}>
          <div className={classes["header-logo"]}>
            <Link href="/" onClick={closeNavbarHandler}>
              <Image
                src="/images/logo/logo-header.png"
                alt="Header Logo Image"
                fill
                sizes="(min-width: 769px) 100vw, (min-width: 1025px) 100vw, 100vw"
              />
            </Link>
          </div>
          <div className={classes["mobile-view"]}>
            <div className={classes["header-actions"]}>
              <button
                className={classes["toggle-navbar-button"]}
                onClick={toggleNavbarHandler}
              >
                {openNavbar ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <Navbar
              className={!openNavbar ? classes["navbar-hide"] : ""}
              closeNavbarHandler={closeNavbarHandler}
              data={items}
            />
          </div>
          <div className={classes["desktop-view"]}>
            <Navbar data={items} />
          </div>
        </div>
      </MaxWidthContainer>
    </header>
  );
};

export default Header;
