import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !price || !category || !collectionName || !description || !stock || !image) {
      alert("Tous les champs doivent être remplis !");
      return;
    }
  
    try {
      await addDoc(collection(db, "products"), {
        name,
        price: parseFloat(price),
        category,
        collection: collectionName,
        description,
        stock: parseInt(stock),
        image,
        images: images ? images.split(",") : [],
        createdAt: new Date().toISOString(),
      }, { params: { adminKey: "SUPER_SECRET_KEY" } });
  
      alert("Produit ajouté avec succès !");
      setName("");
      setPrice("");
      setCategory("");
      setCollectionName("");
      setDescription("");
      setStock("");
      setImage("");
      setImages("");
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit :", error);
    }
  };
  

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Admin - Ajouter un produit</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Nom du produit" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded" />
          <input type="number" placeholder="Prix (€)" value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="Catégorie" value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="Collection" value={collectionName} onChange={(e) => setCollectionName(e.target.value)} className="p-2 border rounded" />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="p-2 border rounded"></textarea>
          <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="URL de l'image principale" value={image} onChange={(e) => setImage(e.target.value)} className="p-2 border rounded" />
          <input type="text" placeholder="URLs des images (séparées par des virgules)" value={images} onChange={(e) => setImages(e.target.value)} className="p-2 border rounded" />
          <button type="submit" className="bg-black text-white p-2 rounded hover:bg-gray-800">Ajouter le produit</button>
        </form>
      </div>
    </div>
  );
}
