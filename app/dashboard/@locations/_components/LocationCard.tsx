import { API_URL } from "@/constants";
import { Card, CardContent, CardHeader } from "@heroui/react";
import Link from "next/link";
import { AuthHeaders } from "../../../../helpers/authHeaders";
import { Location } from "@/entities";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
  if (!store) return;

  const response = await fetch(`${API_URL}/location/${store}`, {
    headers: {
      ...AuthHeaders(),
    },
    next: {
      tags: ["dashboard:locations", `dashboard:locations:${store}`],
    },
  });

  const data: Location = await response.json();

  return (
    <Card>
      <CardHeader className="w-full">
        <b>{data.locationName}</b>
      </CardHeader>
      <CardContent>
        <p>
          Manager:{" "}
          <Link href={{ pathname: `/dashboard/managers/${data.manager?.managerId}` }}>
            {data.manager?.managerFullName}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
