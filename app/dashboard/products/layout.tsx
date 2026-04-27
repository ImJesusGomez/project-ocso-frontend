import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { ReactNode } from "react";
import FilteredCards from "./_components/FilterCards";

export default async function LayoutProducts({ children }: { children: ReactNode }) {
  const response = await (
    await fetch(`${API_URL}/products`, {
      headers: {
        ...AuthHeaders(),
      },
      next: {
        tags: ["dashboard:products"],
      },
    })
  ).json();

  const products: Product[] = response;
  const providers = await (
    await fetch(`${API_URL}/providers`, {
      headers: {
        ...AuthHeaders(),
      },
      next: {
        tags: ["dashboard:providers"],
      },
    })
  ).json();

  return (
    <div className="h-[90vh]">
      <div className="w-3/12">
        <FilteredCards products={products} providers={providers} />
      </div>
      <div className="w-6/12 bg-red-400">{children}</div>
    </div>
  );
}
