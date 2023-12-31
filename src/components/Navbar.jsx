import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";

import logo from "../images/Logo.jpg";

import { Drawer, Box, ListItem, List } from "@mui/material";

import ProductList from "./ProductsList";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleProductsDropdown = (isOpen) => {
    setProductsDropdownOpen(isOpen);
  };

  const location = useLocation();

  const initialClickedLink =
    location.pathname === "/"
      ? 0
      : location.pathname === "/aboutpage"
      ? 1
      : location.pathname === "/productspage"
      ? 2
      : location.pathname === "/servicepage"
      ? 3
      : location.pathname === "/contactpage"
      ? 4
      : null;
  const [clickedLink, setClickedLink] = useState(initialClickedLink);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const home = () => {
    window.location.href = "/";
  };

  const handleLinkClick = (index) => {
    setClickedLink(index);
  };

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const navbarStyle = {
    position: isScrollingDown ? "fixed" : "absolute"
  };

  const list = () => (
    <Box style={{ width: "auto", height: 500 }}>
      <List>
        <ListItem className="list-items">
          <button className="close-button btn " onClick={handleClose}>
            <RxCross1 />
          </button>

          <div className="d-flex mt-5" href="/">
            <img
              src={logo}
              alt="logo-img"
              width={40}
              height={40}
              className=" me-2"
            />
            <h2>
              SMART LABORATORY <br />
              FURNITURE AND DECOR
            </h2>
          </div>

          <div>
            <div className="nav-links-drawer mt-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <hr />
              <li>
                <Link to="/aboutpage">Who we are</Link>
              </li>
              <hr />
              <li>
                <Link to="/projectpage" className="project-link">
                  Projects
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/servicepage">Products</Link>
              </li>
              <hr />
              <li>
                <Link to="/contactpage">Contact Us</Link>
              </li>
            </div>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav style={navbarStyle}>
      <div className="nav-content d-flex">
        <div className="d-flex align-items-center" onClick={home}>
          <img
            src={logo}
            alt="logo-img"
            width={50}
            height={50}
            className=" me-2"
          />
          <h1 className="heading text-white">
            SMART LABORATORY <br />
            FURNITURE AND DECOR
          </h1>
        </div>

        <div className="nav-links">
          <Link
            to="/"
            className={clickedLink === 0 ? "clicked" : ""}
            onClick={() => handleLinkClick(0)}
          >
            <GoHome className="home-icon" />
          </Link>
          <Link
            to="/aboutpage"
            className={clickedLink === 1 ? "clicked" : ""}
            onClick={() => handleLinkClick(1)}
          >
            WHO WE ARE
          </Link>
          <Link
            to="/servicepage"
            className={clickedLink === 3 ? "clicked" : ""}
            onClick={() => handleLinkClick(3)}
            onMouseEnter={() => handleProductsDropdown(true)}
            onMouseLeave={() => handleProductsDropdown(false)}
          >
            <span>PRODUCTS</span>
          </Link>

          <Link
            to="/projectpage"
            className={clickedLink === 2 ? "clicked" : ""}
            onClick={() => handleLinkClick(2)}
          >
            PROJECTS
          </Link>
          <Link
            to="/contactpage"
            className={clickedLink === 4 ? "clicked" : ""}
            onClick={() => handleLinkClick(4)}
          >
            CONTACT US
          </Link>
        </div>
        <ProductList
          isProductsDropdownOpen={isProductsDropdownOpen}
          handleProductsDropdown={handleProductsDropdown}
        />

        <Drawer open={open} anchor="top" onClose={handleClose}>
          {list()}
        </Drawer>
        <button
          className="menu-button btn btn-outline-light fs-3"
          color="inherit"
          onClick={handleOpen}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <hr className="hr text-white position-absolute w-75" />
    </nav>
  );
};

export default Navbar;