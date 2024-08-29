"use client";

import Select from "@/components/Select";
import { getAllCarTypes } from "@/utils/api-calls";
import { YEARS_RANGE } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

function HomePage() {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [modelYears, setModelYears] = useState([]);
  const [selectedType, setSelectedType] = useState("Unset");
  const [selectedYear, setSelectedYear] = useState("Unset");

  useEffect(() => {
    (async () => {
      try {
        const { Results } = await getAllCarTypes();

        setVehicleTypes(Results);
        setModelYears(YEARS_RANGE);
      } catch (error) {
        console.error(error.message);
      }
    })(); //Immediately Invoked Function Expression
  }, []);

  const isBtnVisible = selectedType !== "Unset" && selectedYear !== "Unset";

  return (
    <main className="relative flex justify-center w-[100vw] h-[100vh] p-0 z-10">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="flex flex-col gap-4 w-full items-center justify-center font-semibold px-4">
          <Select
            label="Vehicle's type"
            data={vehicleTypes}
            onChange={(e) => setSelectedType(e.target.value)}
          />

          <Select
            label="Model's year"
            data={modelYears}
            onChange={(e) => setSelectedYear(e.target.value)}
          />

          {isBtnVisible ? (
            <Link
              className="cursor-pointer max-w-[200px] bg-slate-50 rounded-xl py-2 px-8 w-full text-center"
              href={`/result/${
                vehicleTypes.find((item) => item.MakeName === selectedType)
                  .MakeId
              }/${selectedYear}`}>
              Next ✨
            </Link>
          ) : (
            <div className="h-10"></div> // prevents layout shift
          )}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
