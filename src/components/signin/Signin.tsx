import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface subprops {
  hidden: boolean;
  modeSwitcher: Dispatch<SetStateAction<boolean>>;
}

const SignInComponent = (props: subprops) => {
  if (props.hidden) {
    return null;
  }
  return (
    <Box alignItems={"center"} w={"md"}>
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
        Sign in
      </Text>
      <Input placeholder={"email"} my={1}></Input>
      <Input placeholder={"password"} type={"password"} my={1}></Input>
      <Flex flexDir={"row"} justifyContent={"space-between"}>
        <Button
          my={1}
          px={"2vw"}
          bg={"gray.200"}
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.400" }}
          textColor={"textColour"}
          onClick={(e) => props.modeSwitcher(true)}
        >
          Sign Up
        </Button>
        <Button
          my={1}
          px={"2vw"}
          bg={"confirmColourMain"}
          _hover={{ bg: "confirmColourHover" }}
          _active={{ bg: "confirmColourClick" }}
          textColor={"subColour"}
        >
          Sign in
        </Button>
      </Flex>
    </Box>
  );
};

export default SignInComponent;
