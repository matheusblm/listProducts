import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ProductData } from "../../types/product";

type ProductProps = {
  productOnList: ProductData;
};

export const Product = ({ productOnList }: ProductProps) => {
  return (
    <Stack direction="column" spacing="2">
      <Image
        alt={productOnList.images[0].alt}
        src={productOnList.images[0].asset.url}
      />
      <Heading as="h2" size="md">
        {productOnList.name}
      </Heading>
      <Text>{productOnList.category.name}</Text>
      <Text>{productOnList.shortDescription}</Text>
    </Stack>
  );
};
