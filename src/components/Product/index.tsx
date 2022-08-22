import { Box, Heading, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { ProductData } from "../../types/product";
import { ModalProductInfo } from "../ModalProductInfo";

type ProductProps = {
  productOnList: ProductData;
};

export const Product = ({ productOnList }: ProductProps) => {
  return (
    <Stack
      direction="column"
      spacing="2"
      height="450px"
      justifyContent="space-between"
      padding="10px"
      border="0.5px solid"
      borderColor="gray.200"
      borderRadius="10px"
    >
      <Image
        width="216px"
        height="216px"
        alignSelf="center"
        alt={productOnList.images[0].alt}
        src={productOnList.images[0].asset.url}
      />

      <Tooltip label={productOnList.name}>
        <Heading as="h2" size="md">
          {`${productOnList.name.slice(0, 15)}...`}
        </Heading>
      </Tooltip>
      <Tooltip label={"Categoria"} textAlign="center">
        <Box
          borderRadius="10px"
          bg="#87CEFA"
          color="white"
          width="fit-content"
          p="5px"
        >
          <Text fontSize="sm">{productOnList.category.name}</Text>
        </Box>
      </Tooltip>

      <Text>{`${productOnList.shortDescription.slice(0, 100)}...`}</Text>
      <ModalProductInfo
        title={productOnList.name}
        description={productOnList.shortDescription}
        category={productOnList.category.name}
        imagesAlt={productOnList.images[0].alt}
        imagesUrl={productOnList.images[0].asset.url}
      />
    </Stack>
  );
};
