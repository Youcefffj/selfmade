import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Selfmade</Link>
      <Link to="/shop" className="text-xl font-bold">Shop</Link>
      <Link to="/cart" className="text-xl font-bold">Panier</Link>
      <div>
        <Link to="/account" className="mr-4">Mon Compte</Link>
        <Link to="/contact" className="mr-4">Contact</Link>
        <Link to="/about" className="mr-4">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
