import { Box, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100%" h="100vh">
      <Flex
        flexDirection={["column", "column", "column", "row", "row", "row"]}
        w="100%"
      >
        {children}
      </Flex>
    </Box>
  );
};
