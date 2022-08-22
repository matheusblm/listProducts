import { Dispatch, SetStateAction } from "react";
import { ProductDataList } from "../types/product";

export const getCategories = async (
  setCategoriesList: Dispatch<SetStateAction<string[] | undefined>>
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
    .then((productData: ProductDataList) => {
      const categories = productData.data.nodes.map(
        (item) => item.category.name
      );

      const uniqueArray = categories.filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      });
      setCategoriesList(uniqueArray);
    });
};
