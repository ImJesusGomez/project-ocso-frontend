import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocationt";

const LocationPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const userCookies = await cookies();

  const token = userCookies.get(TOKEN_NAME)?.value;
  let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  data = [
    ...data,
    {
      locationId: 0,
      locationName: "Ninguna",
      locationLatLng: [0, 0],
      locationAddress: "No existe",
    },
  ];

  return (
    <div className="w-8/12">
      <div className="w-full h-[90vh] flex flex-col items-center">
        <div className=" w-1/2 my-10">
          <SelectLocation locations={data} store={searchParams.store} />
        </div>
        <div className="w-8/12">
          <LocationCard store={searchParams.store} />
        </div>
        <FormNewLocation />
      </div>
    </div>
  );
};

export default LocationPage;
