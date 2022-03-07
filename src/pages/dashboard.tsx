import { Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { useState } from "react";
import Overview from "../components/dashboard/Overview";
import Summary from "../components/dashboard/Summary";

interface subPageInfo {
  name: string;
  component: JSX.Element;
}
const Page = (props: { hidden?: boolean }) => {
  const subPages: subPageInfo[] = [
    {
      name: "Overview",
      component: <Overview />,
    },
    {
      name: "Summary",
      component: <Summary />,
    },
  ];

  const [CurrentlyShowing, setCurrentlyShowing] = useState<subPageInfo>(
    subPages[0]
  );

  if (props.hidden) {
    return null;
  }
  return (
    <Flex
      flexDir={"row"}
      bg={
        "-webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)" &&
        "linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)"
      }
    >
      <Flex
        w={"20vw"}
        h={"100vh"}
        bg={"rgba(255,255,255,0.25)"}
        flexDir={"column"}
        py="2"
        px={"5"}
      >
        <Link href={"/"} fontSize={"3xl"} color={"white"}>
          MonoManager
        </Link>
        <Spacer />
        {subPages.map((data) => (
          <Button
            onClick={(e) => {
              setCurrentlyShowing(data);
            }}
            my={2}
          >
            {data.name}
          </Button>
        ))}
        <Spacer />
      </Flex>
      <Flex w={"full"} h={"100vh"} p={"10"}>
        {CurrentlyShowing.component}
      </Flex>
    </Flex>
  );
};

export default Page;
