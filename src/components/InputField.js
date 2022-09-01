import React from "react";
import { useContext } from "react";
import { InputContext } from "../App";

//champs de renseignement de l'url a definir avant la génération du qrCode
const InputField = () => {
  // recupération des données passé dans le context (voir app.js)
  const { inputValue, setInputValue } = useContext(InputContext);
  //console.log(inputValue);

  const handleOnChange = (e) =>
    setInputValue({ ...inputValue, url: e.target.value });

  return (
    <div>
      <label className="font-semibold text-md">Votre URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https;//exemple.com"
        value={inputValue.url}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default InputField;
