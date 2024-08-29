import React, { Suspense } from "react";
import ModelsListItem from "./ModelsListItem";
import Loader from "./Loader";

function ModelsList({ data }) {
  return (
    <Suspense fallback={<Loader />}>
      <ul className="w-full flex pt-12 px-4 gap-4 flex-wrap justify-center items-center w-full">
        {data.map((item) => (
          <li key={item.Model_ID}>
            <ModelsListItem
              name={item.Make_Name}
              model={item.Model_Name}
              id={item.Model_ID}
            />
          </li>
        ))}
      </ul>
    </Suspense>
  );
}

export default ModelsList;
