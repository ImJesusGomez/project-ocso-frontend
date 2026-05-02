"use client";

import { Location } from "@/entities";
import { Select } from "@heroui/react";

export default function SelectLocation({ store }: { store: Location[] }) {
  return (
    <Select name="location">
      {store.map((s: Location) => (
        <option key={String(s.locationId)}>{s.locationName}</option>
      ))}
    </Select>
  );
}
