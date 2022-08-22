import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getCategories } from "../../services/getCategories";

type CategoriesBlockProps = {
  setFilterIsOn: Dispatch<SetStateAction<boolean>>;
  setSelectedCategories: Dispatch<SetStateAction<string[] | undefined>>;
};

export const CategoriesBlock = ({
  setFilterIsOn,
  setSelectedCategories,
}: CategoriesBlockProps) => {
  const [categoriesList, setCategoriesList] = useState<string[]>();
  const [categoriesToSearch, setCategoriesToSearch] = useState<string[]>();

  useEffect(() => {
    getCategories(setCategoriesList);
  }, []);

  const handleChangeCategories = () => {
    if (categoriesToSearch?.includes("todos")) {
      setFilterIsOn(false);
      setSelectedCategories(categoriesToSearch);
      return;
    } else {
      setSelectedCategories(categoriesToSearch);
      setFilterIsOn(true);
      return;
    }
  };

  return (
    <Box
      borderRadius="10px"
      bg="#87CEFA"
      padding="20px"
      mt="20px"
      ml="20px"
      color="gray.600"
      maxH="700px"
    >
      <Heading as="h2" size="md" mb="15px">
        Filtros
      </Heading>
      <Box>
        <CheckboxGroup
          colorScheme="green"
          onChange={(event) => {
            const formatedEvent: string[] = event.map((item) => String(item));
            setCategoriesToSearch(formatedEvent);
          }}
        >
          <SimpleGrid
            minChildWidth="75px"
            spacing="15px"
            w="80%"
            p="7"
            column="6"
          >
            <Checkbox value={"todos"}>Todos</Checkbox>
            {categoriesList?.map((item) => (
              <Checkbox key={item} value={item}>
                {item}
              </Checkbox>
            ))}
          </SimpleGrid>
        </CheckboxGroup>
        <Button mt="15px" onClick={() => handleChangeCategories()}>
          Filtrar
        </Button>
      </Box>
    </Box>
  );
};
