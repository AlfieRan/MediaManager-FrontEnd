import { Flex, Link, Spacer, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Overview from "../components/dashboard/Overview";
import Schedule from "../components/dashboard/Schedule";
import Files from "../components/dashboard/Files";
import Redirector from "../components/signin/Redirector";
import { useRouter } from "next/router";

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
      name: "Files",
      component: <Files />,
    },
    {
      name: "Schedule",
      component: <Schedule />,
    },
  ];

  const [CurrentlyShowing, setCurrentlyShowing] = useState<subPageInfo>(
    subPages[0]
  );

  const router = useRouter();

  useEffect(() => {
    if (router && router.query.id) {
      console.log(`query: ${router.query.id}`);
    }
  }, [router]);

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
      h={"95vh"}
    >
      <Flex
        w={"20vw"}
        h={"full"}
        bg={"rgba(255,255,255,0.25)"}
        flexDir={"column"}
        py="2"
        px={"5"}
      >
        <Spacer />
        {subPages.map((data) => (
          <Button
            id={data.name}
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
      <Flex w={"full"} h={"full"} p={"10"}>
        {CurrentlyShowing.component}
      </Flex>
      <Redirector />
    </Flex>
  );
};

export default Page;
