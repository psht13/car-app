import React from "react";

function ModelsListItem({ name, model, id }) {
  return (
    <div className="flex flex-col gap-2 bg-slate-50 rounded-xl w-full max-w-[200px] p-4 shadow-md">
      <ModelsListItemField
        label={"Type"}
        payload={name}
      />
      <ModelsListItemField
        label={"Model"}
        payload={model}
      />
      <ModelsListItemField
        label={"Model ID"}
        payload={id}
      />
    </div>
  );
}

function ModelsListItemField({ label, payload }) {
  return (
    <span >
      <span className="font-semibold">{label}: </span> <br />
      {payload}
    </span>
  );
}

export default ModelsListItem;
