import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  data: {
    id: string;
    href: string;
    name: string;
  }[];
  className?: string;
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

  return (
    <li className={classes["navbar-item"]}>
      <Link href={item.href} onClick={closeNavbarHandler}>
        {item.name}
      </Link>
    </li>
  );
};

const Navbar = (props: NavbarProps) => {
  const { data: items, className, closeNavbarHandler } = props;

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
      <div className={classes["navbar-image"]}>
        <Image
          src="/images/benefits/benefits-image-3.png"
          alt="Navbar Image"
          fill
          sizes="(min-width: 769px) 100vw, (min-width: 1025px) 100vw, 100vw"
        />
      </div>
    </div>
  );
};

export default Navbar;
