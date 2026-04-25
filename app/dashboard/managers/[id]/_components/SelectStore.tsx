"use client";

import { Location } from "@/entities";
import { Select } from "@heroui/react";

export default function SelectStore({
  store,
  defaultStore,
}: {
  store: Location[];
  defaultStore: number;
}) {
  const disabledStores = store
    .map((s: Location) => (s.manager ? String(s.locationId) : undefined))
    .filter((id): id is string => id !== undefined);

  return (
    <Select name="location" disabledKeys={disabledStores}>
      {store.map((s: Location) => (
        <option key={String(s.locationId)}>{s.locationName}</option>
      ))}
    </Select>
  );
}
