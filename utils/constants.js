// some urls
export const BASE_URL = "https://vpic.nhtsa.dot.gov/api";
export const VEHICLE_TYPES_URL =
  "/vehicles/GetMakesForVehicleType/car?format=json";

export const VEHICLE_DATA_URL = "/vehicles/GetModelsForMakeIdYear/makeId";

// array of years
export const YEARS_RANGE = Array.from(
  { length: new Date().getFullYear() - 2015 + 1 },
  (_, i) => 2015 + i
);
