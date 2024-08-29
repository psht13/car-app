function SelectOptionsList({ data }) {
  return (
    <>
      {data.map((item) => (
        <option key={item.MakeId ?? item}>{item.MakeName ?? item}</option>
      ))}
    </>
  );
}

export default SelectOptionsList;
