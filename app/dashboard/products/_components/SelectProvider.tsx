"use server";

import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Select } from "@heroui/react";

export default async function SelectProvider() {
  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {
      ...AuthHeaders(),
    },
  });

  const providers = await responseProviders.json();
  return (
    <Select aria-label="Proveedor" name="provider">
      {providers.map((provider: Provider) => {
        return <option key={provider.providerId}>{provider.providerName}</option>;
      })}
    </Select>
  );
}
