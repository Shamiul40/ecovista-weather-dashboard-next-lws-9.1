import { NextResponse } from "next/server";
import { getLocationByName } from "../location-utils";

export const GET = async (request, { params }) => {
  const name = params.name;
  const locationByName = await getLocationByName(name);

  return NextResponse.json(locationByName);
};
