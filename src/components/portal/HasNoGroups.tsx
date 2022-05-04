import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const HasNoGroups = (props: {
  hidden?: boolean;
  setCreatingNewGroup: Dispatch<SetStateAction<boolean>>;
}) => {
  if (props.hidden) return null;
  return (
    <Box hidden={props.hidden}>
      <Text fontSize={"4xl"} mb={5}>
        Your Portal
      </Text>
      <Text fontSize={"xl"}>
        This page is for managing, creating and joining your groups!
        <br />
        However it looks like you don't have any groups yet.
      </Text>
      <Text fontSize={"xl"} mt={3}>
        So there's two ways to fix that...
      </Text>
      <Box mt={10}>
        <Text fontSize={"2xl"}>By either joining a group...</Text>
        <Flex mt={3}>
          <Input
            placeholder={"Enter your group's code here"}
            borderRightRadius={0}
          ></Input>
          <Button borderLeftRadius={0}>Join</Button>
        </Flex>
      </Box>
      <Box mt={10}>
        <Text fontSize={"2xl"}>Or by making a new one!</Text>
        <Button
          mt={3}
          bg={"blue.500"}
          color={"white"}
          _hover={{ bg: "blue.600" }}
          fontSize={"lg"}
          onClick={(e) => {
            props.setCreatingNewGroup(true);
          }}
        >
          Make a new group
        </Button>
      </Box>
    </Box>
  );
};

export default HasNoGroups;
