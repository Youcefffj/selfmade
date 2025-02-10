import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const products = [
    { id: "1", name: "T-Shirt Selfmade", price: 29.99 },
    { id: "2", name: "Hoodie Selfmade", price: 49.99 },
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Bienvenue sur Selfmade Shop</h1>
      <p>Découvrez nos dernières collections</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}