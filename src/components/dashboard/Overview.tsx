import { Box, Center, Text } from "@chakra-ui/react";

const Overview = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Box w={"full"} h={"full"} bg={"white"} borderRadius={"xl"}>
      <Center>
        <Text fontSize={"3xl"}>Overview</Text>
      </Center>
    </Box>
  );
};

export default Overview;
