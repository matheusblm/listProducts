import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Heading,
  Stack,
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
      setSelectedCategories([]);
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
      color="gray.600"
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
          <Stack spacing={5} direction={"row"}>
            <Checkbox value={"todos"}>Todos</Checkbox>
            {categoriesList?.map((item) => (
              <Checkbox key={item} value={item}>
                {item}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
        <Button mt="15px" onClick={() => handleChangeCategories()}>
          Filtrar
        </Button>
      </Box>
    </Box>
  );
};
