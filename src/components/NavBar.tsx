import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { fetcher } from "../utils/fetcher";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function isLoggedIn() {
  const result = await fetcher<boolean>("GET", "user/isloggedin");
  return result;
}

const NavBar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    isLoggedIn().then((res) => {
      if (res.data) {
        setLoggedIn(true);
      }
    });
  }, [router]);
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
      <Link
        href={"/signin"}
        alignSelf={"right"}
        _hover={{ color: "subHover" }}
        hidden={loggedIn}
      >
        Sign In
      </Link>
      <Link
        href={"/profile"}
        alignSelf={"right"}
        _hover={{ color: "subHover" }}
        hidden={!loggedIn}
      >
        Profile
      </Link>
    </Flex>
  );
};

export default NavBar;
