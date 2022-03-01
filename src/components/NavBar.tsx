import { Box, Flex, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      w={"100vw"}
      flexDir={"row"}
      fontSize={"3xl"}
      fontWeight={"xl"}
      justifyContent={"space-between"}
      color={"subColour"}
      px={2}
      bg={"rgba(0,0,0,0.1)"}
    >
      <Link href={"/"} alignSelf={"left"} _hover={{ color: "subHover" }}>
        MonoManager
      </Link>
      <Link href={"/signin"} alignSelf={"right"} _hover={{ color: "subHover" }}>
        Sign In
      </Link>
    </Flex>
  );
};

export default NavBar;
