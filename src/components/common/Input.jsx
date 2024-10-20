import React, { useState } from "react";

const Input = ({ id, name, label, value }) => {

  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        className="peer h-10 w-full p-2 bg-transpart border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <label
        htmlFor={id}
        className={`absolute z-0  text-gray-500 transform transition-all duration-200 ease-in-out 
        peer-placeholder-shown:top-2 
        peer-placeholder-shown:left-4 
        peer-placeholder-shown:text-gray-500 
        peer-focus:-top-1/4 
        peer-focus:left-1 
        peer-focus:text-black-500 
        peer-focus:bg-white 
        peer-focus:px-1
        ${value != '' ? '-top-1/4 left-1 bg-white px-1 text-black-500 ' : 'left-4 top-2 '}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
