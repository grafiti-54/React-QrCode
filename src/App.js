import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import { createContext, useState } from "react";
import axios from "axios";

//Création du context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //limité a 100 requetes pour clé payant mettre la clé dans .env
  //! S'inscrire sur https://www.qrcode-tiger.com/
  const config = {
    headers: {
      //Authorization: "Bearer ************************************", //! S'inscrire sur https://www.qrcode-tiger.com/
      
    },
  };

  // parametres du qrcode de la documentation de l'api https://qrtiger.stoplight.io/docs/qrtiger-api/84b87c49b494e-create-static-qr-code
  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };

  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  //les values en dernier
  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
  };
  //console.log(inputValue)

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
