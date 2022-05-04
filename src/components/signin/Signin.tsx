import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/router";

interface subprops {
  hidden: boolean;
  modeSwitcher: Dispatch<SetStateAction<boolean>>;
}

interface UserInfo {
  email: string;
  password: string;
}

const SignInComponent = (props: subprops) => {
  const router = useRouter();
  const [showError, setShowError] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<UserInfo>({
    email: "",
    password: "",
  });

  async function SignIn(
    info: UserInfo,
    setShowError: Dispatch<SetStateAction<boolean>>
  ) {
    if (info.email !== "" && info.password != "") {
      const successful = await fetcher<boolean>("POST", "signin", info);
      if (successful) {
        router.push("/portal");
      } else {
        setShowError(true);
      }
    } else {
      setShowError(true);
    }
  }

  if (props.hidden) {
    return null;
  }
  return (
    <Box alignItems={"center"} w={"md"}>
      <Text fontSize={"3xl"} textAlign={"center"} fontWeight={"semibold"}>
        Sign in
      </Text>
      <Text
        textAlign={"center"}
        color={"red.500"}
        fontWeight={"semibold"}
        hidden={!showError}
      >
        The entered Email or Password is incorrect
      </Text>
      <Input
        id={"email"}
        placeholder={"email"}
        my={1}
        value={loginData.email}
        onChange={(e) => {
          setLoginData((prev) => {
            return { ...prev, email: e.target.value };
          });
          setShowError(false);
        }}
      ></Input>
      <Input
        id={"password"}
        placeholder={"password"}
        type={"password"}
        my={1}
        value={loginData.password}
        onChange={(e) => {
          setLoginData((prev) => {
            return { ...prev, password: e.target.value };
          });
          setShowError(false);
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
          onClick={(e) => {
            SignIn(loginData, setShowError);
          }}
        >
          Sign in
        </Button>
      </Flex>
    </Box>
  );
};

export default SignInComponent;
