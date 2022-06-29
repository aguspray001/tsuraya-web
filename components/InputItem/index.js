import React, { useState } from "react";
import { dataItem } from "../../constant";
import useWindow from "../../hooks/useWindow";
import Button from "../Button";
import Input from "../Input";

const InputItem = ({ number = "", onAddInput, isLastItem }) => {
  const [selectedOption, setSelectedOption] = useState(dataItem[0].value);
  const [width, height] = useWindow();

  return (
    <div className="flex flex-col justify-start mt-4 border-2 border-black rounded-xl py-2 px-2 shadow-xl sm:border-none sm:shadow-none">
      <span className="font-semibold mb-2">Pesanan ke - {number}</span>
      <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-2">
        <Input
          type="option"
          name="item"
          data={dataItem}
          onChange={(e) => {
            setSelectedOption(e.target.value)
          }}
        />
        <Input
          type="option"
          name="thickness"
          data={dataItem}
          onChange={(e) => console.log(e.target.value)}
          selectedOption={selectedOption}
        />
        <Input placeHolder="Jumlah Order" type="number"/>
        {isLastItem && <Button title={width <= 425 ? "Tambah Pesanan": "Tambah"} onClick={onAddInput} />}
      </div>
    </div>
  );
};

export default InputItem;
