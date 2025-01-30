import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1 : Logo + Slogan */}
        <div>
          <h2 className="text-2xl font-bold">SELFMADE</h2>
          <p className="text-gray-400 mt-2">Exprimez votre style unique.</p>
        </div>

        {/* Section 2 : Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold">Navigation</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-white">Boutique</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="/account" className="text-gray-400 hover:text-white">Mon Compte</Link></li>
          </ul>
        </div>

        {/* Section 3 : Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold">Suivez-nous</h3>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Twitter />
            </a>
          </div>
        </div>

      </div>

      {/* Section Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 SELFMADE. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
