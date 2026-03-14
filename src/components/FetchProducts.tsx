import { StructData } from "./StructData.tsx";
import { useState, useEffect } from 'react';
import { fetchProducts } from "../helpers/getFakeStoryApi.ts";

export const FetchDogs = () => {

  const [resultData, setResultData] = useState({ image: '', title: '', price: '', category: '', description: '' })

  useEffect(() => {


  },)


  const onFetchDogsPic = () => {


    getDogImage().then(
      (resolvedData) => {
        const { message, description }: any = resolvedData;
        setResultData({
          imageUrl: message,
          description: status
        })
      }
    )

  }

  return (
    <>
      <h1>Dog Images</h1>
      <div>
        <button onClick={onFetchDogsPic}>Fetch Dogs Picture</button>
        <PicContainer imageUrl={resultData.imageUrl} description={resultData.description} />
      </div>
    </>
  )

}
