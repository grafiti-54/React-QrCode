import {saveAs} from "file-saver";
import React, { useContext } from 'react';
import { InputContext } from '../App';

const QrCode = () => {
//https://media.qrtiger.com/uploads/staticQR/cifd3-1661961482050.png
  const {response, loading, error} = useContext(InputContext);
  //console.log(response);

  const downloadImage = () => {
    saveAs(response, 'qrCode.png')
  }

  if(loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }

  if(error) {
    return <div className="text-gray-500 flex items-center">Désolé, licence gratuite 100 demandes max  😥</div>
  }

  return (
    <div className='bg-gray-100 rounded-r-md flex flex-col items-center justufy-center' alt="qrcode">
        
      {response ? (
        
        <div>
          <img className='w-48' src={response} alt="qrcode" />
            <button onClick={downloadImage} className='bg-blue-400 text-white mt-2 px-4 py-1 w-full'>Télécharger</button>
        </div>
      ) :(
        <div>
          <img className='w-48' src="https://media.qrtiger.com/uploads/staticQR/cifd3-1661961482050.png" alt="qrcode" />
        </div>
      )}
      </div>      
  )
}

export default QrCode

