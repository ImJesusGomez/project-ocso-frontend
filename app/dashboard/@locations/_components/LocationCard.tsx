import { API_URL, TOKEN_NAME } from "@/constants";
import { Card, CardContent, CardHeader } from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LocationCard({ store }: { store: string | string[] | undefined }) {
  if (!store) return;
  const token = (await cookies()).get(TOKEN_NAME)?.value;

  const { data } = await axios.get(`${API_URL}/location/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <Card>
      <CardHeader className="w-full">
        <b>{data.locationName}</b>
      </CardHeader>
      <CardContent>
        <p>
          Manager:{" "}
          <Link href={{ pathname: "/dashboard/managers" }}>{data.manager?.managerFullName}</Link>
        </p>
      </CardContent>
    </Card>
  );
}
