import { Product } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input } from "@heroui/react";

export default function FilteredCards({ products }: { products: Product[] }) {
  const [filtered, setFiltered] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(filtered.toLowerCase()),
    );

    setProductsList(filteredProducts);
  }, [filtered, products]);

  return (
    <div className="max-h-full overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 px-10 pt-10">
      <Input placeholder="Buscar producto..." onChange={(e) => setFiltered(e.target.value)} />

      <div className="flex flex-wrap gap-4 mt-4">
        {productsList.map((product) => (
          <Link
            className="hover:scale-110"
            key={product.productId}
            href={`/dashboard/products/${product.productId}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
