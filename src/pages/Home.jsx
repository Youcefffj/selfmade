import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Banner */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-extrabold">Nouvelle Collection 2025</h1>
          <p className="text-lg mt-4">Découvrez nos dernières pièces exclusives.</p>
          <Link to="/shop" className="mt-6 inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Voir la Boutique <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Section Nouveaux Produits */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Nouveaux Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Link 
              key={id} 
              to={`/product/${id}`} 
              className="block bg-white p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <img 
                src={`https://source.unsplash.com/400x400/?clothing&sig=${id}`} 
                alt="Produit" 
                className="w-full h-64 object-cover rounded-md" 
              />
              <h3 className="text-lg font-semibold mt-4">Produit #{id}</h3>
              <p className="text-gray-500">Exclusivité disponible maintenant.</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
