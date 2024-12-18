const FormRow = ({ type, name, value, labelText, onChange }) => {
  return (
    <div className="flex flex-col space-y-2 w-full ">
      <label htmlFor={name} className=" capitalize text-sm dark:text-[#f0f0f0]">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        className=" bg-[#fff] dark:bg-[#333] py-2 border-[1px] border-[#e2e8f0] dark:text-[#f0f0f0] rounded-[0.250rem] focus:outline-[#2cb1bc] dark:outline-none  p-2 text-sm w-full"
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
