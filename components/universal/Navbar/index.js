import Image from "next/image";
import React, { useState } from "react";
import Container from "../container";
import { NavbarWrapper } from "./navbar.styles";

import logo from "../../../assets/logo.svg";
import { NavbarIcons, NavbarLinks } from "../../../utilities/data/navbar";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavbarWrapper showMenu={showMenu}>
      <Container>
        <div className="app__navbar-logo">
          <Image src={logo} alt="App Logo" />
        </div>

        <div className="app__navbar-links">
          {NavbarLinks.map((link) => (
            <Link href={link.path} key={`link-${link.id}`}>
              <a
                className={router.pathname === link.path ? "navbar-active" : ""}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="app__navbar-icons">
          {NavbarIcons.map(({ icon, id, path }) => (
            <a
              href={path}
              onClick={id === 4 ? () => setShowMenu(!showMenu) : null}
              className={`${id === 4 ? "hamburger" : "home-shuffle"} ${
                router.pathname === path ? "navbar-active" : ""
              }`}
              key={`icon-${id}`}
            >
              {showMenu && id === 4 ? <FaTimes /> : icon}
            </a>
          ))}
        </div>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
