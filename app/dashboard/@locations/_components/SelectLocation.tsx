"use client";

import { Location } from "@/entities";
import { useRouter } from "next/router";

export default function SelectLocation({
  locations,
  store,
}: {
  locations: Location[];
  store: string | string[] | undefined;
}) {
  const router = useRouter();
  if (!store) return null;
  return (
    <select
      onChange={(e) => {
        if (e.target.value === "0" || e.target.value === "") {
          router.push("/dashboard");
          return;
        }

        router.push(`/dashboard?store=${e.target.value}`);
      }}
    >
      {locations.map((location) => {
        return (
          <option value={location.locationId} key={location.locationId}>
            {location.locationName}
          </option>
        );
      })}
    </select>
  );
}
