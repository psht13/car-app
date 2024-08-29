import React, { forwardRef } from "react";
import SelectOptionsList from "./SelectOptionsList";

const Select = ({ label, data, onChange }) => {
  return (
    <div className="flex flex-col gap-1 max-w-[360px] w-full">
      <span className="text-lg">{label}</span>
      <select
        onChange={onChange}
        className="rounded-xl py-2 px-1 bg-transparent border-2 border-black text-center">
        {
          <>
            <option value="Unset">Unset</option>
            <SelectOptionsList data={data} />
          </>
        }
      </select>
    </div>
  );
};

export default Select;
