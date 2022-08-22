import { Button, Center, SimpleGrid, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CategoriesBlock } from "../../components/CategoriesBlock";
import { Layout } from "../../components/Layout";
import { Product } from "../../components/Product";
import { getData } from "../../services/getDate";
import { getProductsByCategories } from "../../services/getProdutsByCategories";
import { ProductDataList } from "../../types/product";

export const HomeList = () => {
  const [productList, setProductList] = useState<ProductDataList>();

  const [numberOfProductsToShow, setNumberOfProductsToShow] =
    useState<number>(10);
  const [filterIsOn, setFilterIsOn] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>();

  useEffect(() => {
    if (!productList) {
      getData(setProductList);
    }
    if (filterIsOn && selectedCategories) {
      getProductsByCategories(setProductList, selectedCategories);
      setNumberOfProductsToShow(10);
    }
    if (
      !filterIsOn &&
      (!selectedCategories || selectedCategories.includes("todos"))
    ) {
      getData(setProductList);
    }
  }, [filterIsOn, selectedCategories]);

  return (
    <Layout>
      <CategoriesBlock
        setFilterIsOn={setFilterIsOn}
        setSelectedCategories={setSelectedCategories}
      />
      <Center w="100%">
        <VStack w="100%">
          <SimpleGrid minChildWidth="200px" spacing="30px" w="80%" p="7">
            {productList &&
              productList.data.nodes
                .slice(0, numberOfProductsToShow)
                .map((item) => <Product key={item.id} productOnList={item} />)}
          </SimpleGrid>
          <Button
            marginBottom="20px"
            onClick={() =>
              setNumberOfProductsToShow((previusState) => previusState + 10)
            }
            colorScheme="blue"
            disabled={
              numberOfProductsToShow >= (productList?.data.nodes.length || 0)
            }
          >
            Mostrar mais
          </Button>
        </VStack>
      </Center>
    </Layout>
  );
};
