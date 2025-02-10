import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray.slice(0, 6)); // Limite à 6 produits
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenue sur Selfmade 🛍️</h1>
      
      {/* Affichage des 6 produits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`} 
            className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover rounded-md" 
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-500">{product.price} €</p>
          </Link>
        ))}
      </div>

      {/* Bouton pour voir plus de produits */}
      <div className="text-center mt-8">
        <Link 
          to="/shop" 
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Voir tous les produits →
        </Link>
      </div>
    </div>
  );
}
