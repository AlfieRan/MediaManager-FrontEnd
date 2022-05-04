import { Box, Center, Text } from "@chakra-ui/react";

const Schedule = (props: { hidden?: boolean }) => {
  if (props.hidden) {
    return null;
  } else {
    return (
      <Box w={"full"} h={"full"} bg={"white"} borderRadius={"xl"}>
        <Center>
          <Text fontSize={"3xl"}>Schedule</Text>
        </Center>
      </Box>
    );
  }
};

export default Schedule;
