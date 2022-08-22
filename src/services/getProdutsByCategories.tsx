import { Dispatch, SetStateAction } from "react";
import { ProductDataList } from "../types/product";

export const getProductsByCategories = async (
  setProductList: Dispatch<SetStateAction<ProductDataList | undefined>>,
  categories: string[]
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
      const newProductList = productData.data.nodes.filter((item) =>
        categories.includes(item.category.name)
      );
      const formatedProdutList = {
        data: { nodes: newProductList },
      };
      setProductList(formatedProdutList);
    });
};
