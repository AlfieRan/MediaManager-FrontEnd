import { Dispatch, SetStateAction, useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/router";

interface subprops {
  hidden: boolean;
  modeSwitcher: Dispatch<SetStateAction<boolean>>;
}

interface SignUpInterface {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

function checkName(inp: string) {
  inp = inp.replace(" ", "");
  if (inp === "") {
    return false;
  }
  return true;
}

function checkPass(inp: string) {
  if (inp.length < 5) {
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
  const [SignUpData, setSignUpData] = useState<SignUpInterface>({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [DataError, setDataError] = useState<{
    name: boolean;
    email: boolean;
    password: boolean;
    passwordCheck: boolean;
  }>({ name: false, email: false, password: false, passwordCheck: false });
  const [Error, setError] = useState<boolean>(false);
  const router = useRouter();

  async function Signup(data: SignUpInterface) {
    console.log("Attempting Sign Up Request");
    let noFails = true;
    if (!checkName(data.name)) {
      setDataError((prev) => ({ ...prev, name: true }));
      noFails = false;
    }
    if (!checkEmail(data.email)) {
      setDataError((prev) => ({ ...prev, email: true }));
      noFails = false;
    }
    if (!checkPass(data.password)) {
      setDataError((prev) => ({ ...prev, password: true }));
      noFails = false;
    }
    if (!checkMatchingPass(data.password, data.passwordCheck)) {
      setDataError((prev) => ({ ...prev, passwordCheck: true }));
      noFails = false;
    }
    if (noFails) {
      console.log("Data correct, sending sign up request");
      const confirmed = await fetcher<boolean>("POST", "signup", data);
      if (confirmed) {
        console.log("Account created, sending user to dashbaord");
        await router.push("portal");
      } else {
        console.log("Account failed to be created, displaying error text");
        setError(true);
      }
    } else {
      setError(true);
    }
  }

  if (props.hidden) {
    return null;
  }
  return (
    <Box alignItems={"center"} w={"md"}>
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
        Sign up
      </Text>
      <Text color={"red"} textAlign={"center"} hidden={!Error}>
        Something has gone wrong, please try again.
      </Text>
      <Input
        placeholder={"name"}
        my={1}
        borderColor={DataError.name ? "red.500" : "gray.200"}
        value={SignUpData.name}
        onChange={(e) => {
          setError(false);
          setSignUpData((prev) => ({ ...prev, name: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"email"}
        my={1}
        borderColor={DataError.email ? "red.500" : "gray.200"}
        value={SignUpData.email}
        onChange={(e) => {
          setError(false);
          setSignUpData((prev) => ({ ...prev, email: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"password"}
        type={"password"}
        my={1}
        borderColor={DataError.password ? "red.500" : "gray.200"}
        value={SignUpData.password}
        onChange={(e) => {
          setError(false);
          setSignUpData((prev) => ({ ...prev, password: e.target.value }));
        }}
      ></Input>
      <Input
        placeholder={"confirm password"}
        type={"password"}
        my={1}
        borderColor={DataError.passwordCheck ? "red.500" : "gray.200"}
        value={SignUpData.passwordCheck}
        onChange={(e) => {
          setError(false);
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
            setError(false);
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
            setError(false);
            Signup(SignUpData);
          }}
        >
          Sign up
        </Button>
      </Flex>
    </Box>
  );
};

export default SignUpComponent;
