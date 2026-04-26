import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import ProviderCard from "../_components/ProviderCard";
import { Product, Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";

export default async function ProviderPafe({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const provider: Provider = await (
    await fetch(`${API_URL}/providers/${params.id}`, {
      headers: {
        ...AuthHeaders(),
      },
    })
  ).json();
  return (
    <div className="flex flex-col px-10 gap-10 h-[90vh] pt-10">
      <ProviderCard provider={provider} />
      <div className="h-1 bg-black w-[90vw]" />
      <div className="flex flex-wrap gap-10">
        {provider.products.map((product: Product) => (
          <Link
            href={{ pathname: `/dashboard/products/${product.productId}` }}
            key={provider.providerId}
          >
            <ProductCard product={product} key={product.productId} />
          </Link>
        ))}
      </div>
    </div>
  );
}
