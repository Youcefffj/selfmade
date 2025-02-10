import { useCartStore } from "../store/cartStore";
"use client";
type ProductProps = {
  product: { id: string; name: string; price: number };
};

export default function ProductCard({ product }: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">{product.price} €</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => addItem(product)}
      >
        Ajouter au panier
      </button>
    </div>
  );
}