import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import SignUpComponent from "../components/signin/Signup";
import { fetcher } from "../utils/fetcher";
import SignInComponent from "../components/signin/Signin";

const Page = () => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <Center
      w={"100vw"}
      h={"100vh"}
      bg={
        "-webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)" &&
        "linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)"
      }
    >
      <Box bg={"subColour"} color={"textColour"} p={"1vw"} borderRadius={"xl"}>
        <SignUpComponent hidden={!showSignUp} modeSwitcher={setShowSignUp} />
        <SignInComponent hidden={showSignUp} modeSwitcher={setShowSignUp} />
      </Box>
    </Center>
  );
};

export default Page;
