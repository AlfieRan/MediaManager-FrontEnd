import { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

interface subprops {
  hidden: boolean;
  modeSwitcher: Dispatch<SetStateAction<boolean>>;
}

function checkName(inp: string) {
  inp = inp.replace(" ", "");
  if (inp === "") {
    return false;
  }
  return true;
}

function checkPass(inp: string) {
  if (inp.length < 6) {
    return false;
  }
  return true;
}

function checkMatchingPass(pass: string, passCheck: string) {
  if (pass === passCheck) {
    return true;
  }
  return false;
}

function checkEmail(email: string) {
  let tmp = email.split("@");
  if (
    tmp[0].length > 1 &&
    tmp[1].split(".")[0].length > 1 &&
    tmp[1].split(".")[1].length > 1
  ) {
    return true;
  }
  return false;
}

const SignUpComponent = (props: subprops) => {
  interface SignUpInterface {
    name: string;
    email: string;
    password: string;
    passwordCheck: string;
  }

  const [SignUpData, setSignUpData] = useState<SignUpInterface>({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  if (props.hidden) {
    return null;
  }
  return (
    <Box alignItems={"center"} w={"md"}>
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
        Sign up
      </Text>
      <Input
        placeholder={"name"}
        my={1}
        value={SignUpData.name}
        onChange={(e) => {
          setSignUpData((prev) => ({ ...prev, name: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"email"}
        my={1}
        value={SignUpData.email}
        onChange={(e) => {
          setSignUpData((prev) => ({ ...prev, email: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"password"}
        type={"password"}
        my={1}
        value={SignUpData.password}
        onChange={(e) => {
          setSignUpData((prev) => ({ ...prev, password: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"confirm password"}
        type={"password"}
        my={1}
        value={SignUpData.passwordCheck}
        onChange={(e) => {
          setSignUpData((prev) => ({ ...prev, passwordCheck: e.target.value }));
        }}
      ></Input>
      <Flex flexDir={"row"} justifyContent={"space-between"}>
        <Button
          my={1}
          px={"2vw"}
          bg={"gray.200"}
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.400" }}
          textColor={"textColour"}
          onClick={(e) => {
            props.modeSwitcher(false);
          }}
        >
          Sign In
        </Button>
        <Button
          my={1}
          px={"2vw"}
          bg={"confirmColourMain"}
          _hover={{ bg: "confirmColourHover" }}
          _active={{ bg: "confirmColourClick" }}
          textColor={"subColour"}
          onClick={(e) => {
            console.log(SignUpData);
          }}
        >
          Sign up
        </Button>
      </Flex>
    </Box>
  );
};

export default SignUpComponent;
