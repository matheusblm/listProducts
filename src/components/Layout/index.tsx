import { Box, Center } from "@chakra-ui/react";

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100vw" h="100vh" p="10px">
      <Center>{children}</Center>
    </Box>
  );
};
