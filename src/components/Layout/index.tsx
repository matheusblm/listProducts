import { Box, Center } from "@chakra-ui/react";

type LayoutProps = {
  children: any;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="100%" h="100vh">
      <Center flexDirection="column">{children}</Center>
    </Box>
  );
};
