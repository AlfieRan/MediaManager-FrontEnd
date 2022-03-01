import React, { useState } from "react";
import { Box, Text, Heading, Flex, Center, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import NavBar from "../components/NavBar";

function App() {
  const ListOfEmployees: string[] = [
    "Organisers",
    "Photographers",
    "Team Leaders",
    "Captioners",
  ];
  const [curEmployeeIndex, setCurEmployeeIndex] = useState<number>(0);

  React.useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout;
    if (curEmployeeIndex < ListOfEmployees.length - 1) {
      timeout = setTimeout(
        () => setCurEmployeeIndex(curEmployeeIndex + 1),
        3000
      );
    } else {
      timeout = setTimeout(() => setCurEmployeeIndex(0), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [ListOfEmployees, curEmployeeIndex]);

  return (
    <Box
      h={"100vh"}
      overflow={"hidden"}
      fontFamily={
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;'
      }
      bg={
        "-webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)" &&
        "linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)"
      }
    >
      <NavBar />
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        color="subColour"
        overflow={"auto"}
      >
        <Box mt={10} p={3}>
          <Text textAlign={"center"} fontSize="3xl" fontWeight={2}>
            One website for managing all your social media pages easily and
            efficently.
          </Text>
        </Box>
        <Flex bg={"white"} rounded={"3xl"} p={"1vw"} mt={"1vh"} maxW={""}>
          <Flex
            overflow={"hidden"}
            borderRadius={"lg"}
            pos={"relative"}
            rounded={"3xl"}
            w={"xl"}
            h={"md"}
            maxW={"lg"}
          >
            <Image
              src={"/images/PeopleWorkingPog.jpeg"}
              layout={"fill"}
              objectFit="cover"
              quality={100}
            />
          </Flex>
          <Center maxW={"75%"} flexDir={"column"}>
            <Text
              color={"textColour"}
              px={2}
              fontSize={"3xl"}
              verticalAlign={"middle"}
              textAlign={"center"}
              maxW={"75%"}
              m={"10%"}
            >
              Yeah idk what to put here but here's some text
            </Text>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
