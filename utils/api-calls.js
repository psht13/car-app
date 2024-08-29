import { BASE_URL, VEHICLE_TYPES_URL } from "./constants";

export const getAllCarTypes = async () => {
  const url = `${BASE_URL}${VEHICLE_TYPES_URL}`;
  const response = await fetch(url, { method: "GET" });
  const json = await response.json();
  return json;
};
