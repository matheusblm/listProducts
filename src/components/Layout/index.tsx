import { Box, Center } from "@chakra-ui/react";

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100vw" h="100vh" p="10px">
      <Box bg="gray.400" w="100%" h="40px"></Box>
      <Center>{children}</Center>
    </Box>
  );
};
