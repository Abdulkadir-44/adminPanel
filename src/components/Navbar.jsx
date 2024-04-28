import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { adminLogout } from "../redux/features/adminSlice";
import {  useDispatch } from "react-redux";

const Navbar = () => {

  const location = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(adminLogout());
    window.location.reload();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  if(location === "/login" || location === "/register") return null

  return (
    <nav
      className={`bg-gray-800 w-[250px] h-screen overflow-hidden box-border flex flex-col`}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-..."
        crossOrigin="anonymous"
      />
      <div className="mt-6 mb-6 px-3">
        <NavLink
          to="/"
          className="text-white text-3xl font-bold text-center logo ml-8"
          onClick={handleMenuToggle}
        >
          <i className="fa-solid fa-arrow-left-long"></i>IPSS
        </NavLink>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul
            className={`flex flex-col ml-8 text-xl gap-3 lg:gap-0 ${
              menuOpen ? "menu-open" : ""
            }`}
          >
            <li className="mb-4">
              <NavLink to="/asinler" className="text-white" onClick={handleMenuToggle}>
                <i className="fas fa-home"></i> Asinler
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/kuyruktaki-işlemler"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fas fa-users"></i> Kuyruktaki işlemler
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink
                to="/banlanan-markalar"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fas fa-users"></i> Banlanan markalar
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink
                to="/kullanıcılar"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fas fa-users"></i> Kullanıcılar
              </NavLink>
            </li>

            <li className="mb-4">
              <NavLink
                to="/yöneticiler"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fas fa-users"></i> Yöneticiler
              </NavLink>
            </li>
            
            <li className="mb-4">
              <button className="text-white" onClick={handleLogout}>
                <i className="fa-solid fa-left-long"></i> Çıkış Yap
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button className="lg:hidden menu-toggle" onClick={handleMenuToggle}>
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;