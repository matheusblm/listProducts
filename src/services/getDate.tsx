export const getData = async (setProductList: any) => {
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
