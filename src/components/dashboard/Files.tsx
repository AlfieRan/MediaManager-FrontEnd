import { Box, Center, Flex, Text } from "@chakra-ui/react";

const Summary = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"full"} h={"full"} bg={"white"} borderRadius={"xl"}>
      <Center>
        <Text fontSize={"3xl"}>Files</Text>
      </Center>
    </Box>
  );
};

export default Summary;
