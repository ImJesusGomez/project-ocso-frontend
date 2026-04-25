import { API_URL } from "@/constants";
import { AuthHeaders } from "../../../helpers/authHeaders";
import { Provider } from "@/entities";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuPlus } from "react-icons/lu";

const ProvidersPage = async () => {
  const response = await fetch(`${API_URL}/providers`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const providers: Provider[] = await response.json();

  return (
    <>
      <div className="flex grow-0 flex-col justify-end w-full px-10 h-[90vh]">
        <Button>
          <LuPlus />
        </Button>
      </div>
      <div className="w-full flexm flex-row flex-wrap px-10">
        {providers.map((provider: Provider) => (
          <Link
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
            key={provider.providerId}
          >
            <ProviderCard provider={provider} key={provider.providerId} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProvidersPage;
