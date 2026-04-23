"use client";

import { Select } from "@heroui/react";
import { Location, Manager } from "../../../../entities";

export default function SelectManager({
  managers,
  locations,
}: {
  managers: Manager[];
  locations: Location[];
}) {
  const disabledKeys = locations
    .map((location: Location) => {
      return location.manager!.managerId;
    })
    .filter((managerId) => managerId !== undefined);

  return (
    <Select aria-label="Manager" name="manager" disabledKeys={disabledKeys}>
      {managers.map((manager: Manager) => (
        <option key={manager.managerId} value={manager.managerId}>
          {manager.managerFullName}
        </option>
      ))}
    </Select>
  );
}
