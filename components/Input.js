import React from "react";

const Input = ({
  name,
  type,
  placeHolder,
  value,
  onChange,
  data = [{ value: "", title: "", thickness: [] }],
  selectedOption,
}) => {
  if (type === "date") {
    return (
      <input
        className="border border-black rounded-md px-2 py-1  w-full"
        name={name}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    );
  } else if (type === "option") {
    return (
      <select
        className="border border-black rounded-md px-2 py-1 w-full"
        name={name}
        onChange={onChange}
      >
        {data && name === "item"
          ? data.map((item, key) => {
              if (name === "item") {
                return (
                  <option key={key} value={item.value}>
                    {item.title}
                  </option>
                );
              }
            })
          : data
              .filter((filteredItem) => {
                return filteredItem.value === selectedOption;
              })
              .map((item) => {
                 return item.thickness.map((item, key) => {
                    return (
                      <option key={key} value={item}>
                        {item}
                      </option>
                    );
                  });
              })}
      </select>
    );
  } else {
    return (
      <input
        className="border border-black rounded-md px-2 py-1 w-full"
        name={name}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        min="0"
      />
    );
  }
};

export default Input;
