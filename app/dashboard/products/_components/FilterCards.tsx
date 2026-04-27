import { Product, Provider } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input, Select } from "@heroui/react";

export default function FilteredCards({
  products,
  providers,
}: {
  products: Product[];
  providers: Provider[];
}) {
  const [filtered, setFiltered] = useState<string>("");
  const [productsList, setProductsList] = useState<Product[]>(products);
  const [provider, setProvider] = useState<string>("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const matchesName = product.productName.toLowerCase().includes(filtered.toLowerCase());

      const matchesProvider = provider === "" || product.provider.providerId === provider;

      return matchesName && matchesProvider;
    });

    setProductsList(filteredProducts);
    setShow(true);
  }, [filtered, products, provider]);

  if (!show) return "";

  return (
    <div className="max-h-full overflow-y-auto flex flex-col gap-8 border-r-orange-400 border-r-2 px-10 pt-10">
      <Select value={provider} onChange={(e) => setProvider(e.target.value)}>
        <option value="">Todos los proveedores</option>
        {providers.map((prov) => (
          <option key={prov.providerId} value={prov.providerId}>
            {prov.providerName}
          </option>
        ))}
      </Select>

      <Input placeholder="Buscar producto..." onChange={(e) => setFiltered(e.target.value)} />

      <div className="flex flex-wrap gap-4 mt-4">
        {show &&
          productsList.map((product) => (
            <Link
              className="hover:scale-110 transition"
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
