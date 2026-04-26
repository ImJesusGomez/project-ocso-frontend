import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../helpers/authHeaders";
import { Product } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FilteredCards from "./_components/FilterCards";

const ProvidersPage = async () => {
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

  return (
    <div className="h-[90vh]">
      <div className="w-3/12">
        <FilteredCards products={products} />
      </div>
    </div>
  );
};

export default ProvidersPage;
