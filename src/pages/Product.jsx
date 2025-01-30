import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ChevronDown, ChevronUp, X } from "lucide-react"; // Icônes pour le déroulé et la fermeture

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // État pour gérer le mode plein écran

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct(productData);
          setSelectedImage(productData.image);
        } else {
          console.error("Produit non trouvé !");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-6">Chargement...</p>;
  if (!product) return <p className="text-center mt-6 text-red-500">Produit non trouvé.</p>;

  const allImages = [product.image, ...(product.images || [])];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        
        {/* Galerie d'images */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md cursor-pointer"
              onClick={() => setIsFullscreen(true)} // Active le mode plein écran
            />
          </div>

          {/* Miniatures */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {allImages.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Miniature ${index}`} 
                className={`h-20 w-auto object-contain rounded-md cursor-pointer border-2 transition ${
                  selectedImage === img ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Détails Produit */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <p className="text-3xl font-semibold mt-6">{product.price} €</p>

          {/* Description avec bouton déroulant */}
          <div className="mt-4">
            <button
              className="flex items-center text-gray-600 font-medium hover:text-black transition"
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              {isDescriptionOpen ? "Masquer la description" : "Voir la description"}
              {isDescriptionOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
            </button>
            
            {isDescriptionOpen && (
              <p className="text-gray-600 text-lg mt-2 bg-gray-50 p-4 rounded-lg shadow-inner">
                {product.description}
              </p>
            )}
          </div>

          {/* Bouton Achat */}
          <button className="mt-8 bg-black text-white px-8 py-4 text-lg rounded-lg hover:bg-gray-800 transition">
            Ajouter au panier 🛒
          </button>
        </div>
      </div>

      {/* Mode plein écran */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsFullscreen(false)}
          >
            <X size={40} />
          </button>
          <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-screen object-contain rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Product;
