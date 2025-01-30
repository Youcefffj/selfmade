import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen text-center p-8">
      <h1 className="text-4xl font-bold">Détails du Produit {id}</h1>
      <p className="text-gray-600 mt-2">Description du produit {id} ici...</p>
    </div>
  );
};

export default Product;
