import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";

type ModalProductInfoProps = {
  title: string;
  description: string;
  category: string;
  imagesAlt: string;
  imagesUrl: string;
};

export const ModalProductInfo = ({
  title,
  description,
  category,
  imagesAlt,
  imagesUrl,
}: ModalProductInfoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button alignSelf="end" size="sm" onClick={() => onOpen()}>
        Detalhes
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column">
              <Heading as="h2" size="md">
                {title}
              </Heading>
              <Image alt={imagesAlt} src={imagesUrl} />
              <Box
                borderRadius="10px"
                bg="#87CEFA"
                color="white"
                width="fit-content"
                p="5px"
              >
                <Text fontSize="sm">{category}</Text>
              </Box>
              <Text fontSize="sm">{description}</Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose} size="sm">
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
