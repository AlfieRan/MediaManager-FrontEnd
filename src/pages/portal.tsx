import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { fetcher } from "../utils/fetcher";
import { useEffect, useState } from "react";
import Redirector from "../components/signin/Redirector";
import HasNoGroups from "../components/portal/HasNoGroups";
import GroupNavigator from "../components/portal/GroupNavigator";
import CreateANewGroup from "../components/portal/CreateANewGroup";

const Page = () => {
  const [hasNoGroups, setHasNoGroups] = useState<boolean>(false);
  const [creatingNewGroup, setCreatingNewGroup] = useState<boolean>(false);

  async function getGroups() {
    const groups = (await fetcher<{ id: string }[]>("GET", "getUserGroups"))
      .data;
    if (groups.length === 0) {
      setHasNoGroups(true);
    }
  }

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Center
      w={"100vw"}
      h={"100vh"}
      bg={
        "-webkit-linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)" &&
        "linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)"
      }
    >
      <Box bg={"white"} p={10} borderRadius={"lg"}>
        <GroupNavigator hidden={hasNoGroups || creatingNewGroup} />
        <HasNoGroups
          hidden={!hasNoGroups || creatingNewGroup}
          setCreatingNewGroup={setCreatingNewGroup}
        />
        <CreateANewGroup
          hidden={!creatingNewGroup}
          toggleSelf={setCreatingNewGroup}
        />
      </Box>
      <Redirector />
    </Center>
  );
};

export default Page;
