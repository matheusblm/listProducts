import { Dispatch, SetStateAction } from "react";
import { ProductDataList } from "../types/product";

export const getData = async (
  setProductList: Dispatch<SetStateAction<ProductDataList | undefined>>
) => {
  await fetch("productsCategory.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((productData) => {
      setProductList(productData);
    });
};
