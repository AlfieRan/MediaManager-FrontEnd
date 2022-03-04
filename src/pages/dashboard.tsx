import { Flex, Box } from "@chakra-ui/react";

const Page = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Flex flexDir={"row"}>
      <Box w={"20vw"} h={"100vh"} bg={"gray.300"}></Box>
      <Box w={"full"} h={"100vh"} bg={"gray.200"}></Box>
    </Flex>
  );
};

export default Page;
