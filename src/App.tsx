import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { Product } from "./components/Product";
import { getData } from "./services/getDate";
import { ProductDataList } from "./types/product";

export const App = () => {
  const [productList, setProductList] = useState<ProductDataList>();
  const [productsIsLoading, setProductsIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!productList) {
      setProductsIsLoading(true);
      getData(setProductList);
    }
    setProductsIsLoading(false);
  }, [productList]);

  if (productsIsLoading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <SimpleGrid minChildWidth="200px" spacing="30px" w="80%" p="7">
        {productList &&
          productList.data.nodes.map((item) => (
            <Product key={item.id} productOnList={item} />
          ))}
      </SimpleGrid>
    </Layout>
  );
};
