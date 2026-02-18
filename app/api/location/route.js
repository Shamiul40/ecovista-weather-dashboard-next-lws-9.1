import { NextResponse } from "next/server";
import { getLocation } from "./location-utils";

export const GET = async (request) => {
  const location = await getLocation();
  console.log(location);

  return NextResponse.json(location);
};
