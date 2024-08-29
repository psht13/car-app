"use client";

import ModelsList from "@/components/ModelsList";
import { getAllCarTypes, getFullCarData } from "@/utils/api-calls";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export async function generaStaticParams() {
  const carTypes = await getAllCarTypes();

  const { year } = useParams();
  return carTypes.Results.map((item) => ({ makeId: item.MakeId, year: year }));
}

function ResultPage({ params: { makeId, year } }) {
  const [models, setModels] = useState(null);

  useEffect(() => {
    (async () => {
      const { Results } = await getFullCarData(makeId, year);

      setModels(Results);
    })();
  }, []);

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <button
        className=" max-w-[200px] bg-slate-50 rounded-xl py-2 px-8 w-full text-center shadow-xl"
        onClick={handleClick}
        type="button">
        Go Back
      </button>
      {models !== null && Array.isArray(models) && models.length === 0 ? (
        <div className="font-semibold text-lg pt-24">
          No vehicles found by this request
        </div>
      ) : (
        models && <ModelsList data={models} />
      )}
    </div>
  );
}

export default ResultPage;
