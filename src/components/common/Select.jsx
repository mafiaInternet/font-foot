import React, { useState } from "react";

const Select = ({value, label }) => {
console.log(value)
  const [selectedValue, setSelectedValue] = useState('' || value);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="relative">

    <select
      id="select"
      className="peer h-10 pl-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 appearance-none"
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="">{label}</option>
      <option value="option1" >Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value={value}>{value}</option>
    </select>
    <label
      htmlFor="select"
      className={`absolute z-10 left-3 top-2 text-gray-500 transform transition-all duration-200 ease-out-in
        ${selectedValue !== '' ? '-top-2 left-1 bg-white px-1' : 'top-2 left-3 text-gray-500 cursor-pointer'}`}
    >
      {selectedValue === "" ? "" : label}
    </label>
  </div>
  );
};

export default Select;
