import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">Selfmade</Link>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/product/1" className="mr-4">Exemple Produit</Link>
      </div>
    </nav>
  );
};

export default Navbar;
