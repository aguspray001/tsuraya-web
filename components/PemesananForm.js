import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import InputItem from "./InputItem";

const PemesananForm = ({ onClose }) => {
  const [inputItems, setInputItems] = useState({
    order: [{ number: 1, name: "", totalOrder: 0, thickness: 0 }],
    customerName: "",
    address: "",
  });

  const addInputItem = (data) => {
    setInputItems((value) => ({ ...value, order: [...value.order, data] }));
  };

  const updateInputItem = (e) => {
    setInputItems((prevValue) => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (typeof widow !== "undefined") {
      const order = localStorage.getItem("order");
      setInputItems(JSON.parse(order));
    }
  }, []);

  return (
    <div className="px-4 py-4 bg-white border-2 border-blue-700 rounded-xl shadow-xl max-h-[30rem] overflow-auto">
      <div className="flex flex-col justify-center items-center mb-10">
        <span className="mb-5 font-semibold text-lg">Form Pemesanan</span>
        <div className="flex flex-col w-full px-2 gap-4">
          <Input placeHolder="Nama Pemesan..." />
          <Input placeHolder="Alamat Pemesan..." />
          <span>Tanggal Pengiriman</span>
          <Input type="date" placeHolder="Tanggal Pemesanan..." />
          <div>
            {inputItems &&
              inputItems.order
                .sort((a, b) => a - b)
                .map((inputItem, key) => {
                  return (
                    <InputItem
                      key={key}
                      isLastItem={(inputItems.order.length - 1 === key)}
                      number={inputItem.number}
                      onAddInput={() => {
                        console.log(key)
                        let inputNumber = key + 2;
                        addInputItem({ number: inputNumber++ });
                      }}
                    />
                  );
                })}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 ml-0 sm:ml-3">
        <Button title="Close" onClick={onClose} />
        <Button title="Order" onClick={onClose} />
      </div>
    </div>
  );
};

export default PemesananForm;
