const FormRowSelect = ({
  labelText,
  name,
  list,
  defaultValue = '',
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full space-y-2">
      <label htmlFor={name} className=" capitalize text-sm dark:text-[#f0f0f0]">
        {labelText || name}
      </label>
      <select
        name={name}
        className=" bg-[#fff] dark:bg-[#333] py-2 border-[1px] border-[#e2e8f0] dark:text-[#f0f0f0] rounded-[0.250rem] focus:outline-[#2cb1bc] dark:outline-none  p-2 text-sm w-full"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {list.map((itemvalue) => {
          return (
            <option key={itemvalue} value={itemvalue}>
              {itemvalue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
