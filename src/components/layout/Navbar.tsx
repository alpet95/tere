import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { NAVBAR_ITEMS as items } from "@/data/navbar-items";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string | false;
  closeNavbarHandler?: () => void;
}

interface NavbarItemProps {
  item: {
    id: string;
    href: string;
    name: string;
  };
  closeNavbarHandler?: () => void;
}

const NavbarItem = (props: NavbarItemProps) => {
  const { item, closeNavbarHandler } = props;

  const activeRoute = useRouter().asPath;
  let activeClass;
  
  useEffect(() => {
    activeClass = `${
      activeRoute === item.href && classes["navbar-item-active"]
    }`;
  }, [item.href]);

  return (
    <li className={`${classes["navbar-item"]} ${activeClass}`}>
      <Link href={item.href} onClick={closeNavbarHandler}>
        {item.name}
      </Link>
    </li>
  );
};

const Navbar = (props: NavbarProps) => {
  const { className, closeNavbarHandler } = props;

  return (
    <div className={`${classes.navbar} ${className}`}>
      <nav className={classes["navbar-content"]}>
        <ul className={classes["navbar-items"]}>
          {items.map((item) => (
            <NavbarItem
              key={item.id}
              item={item}
              closeNavbarHandler={closeNavbarHandler}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
