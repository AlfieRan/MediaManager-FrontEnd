import { Box, Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import { NextRouter, useRouter } from "next/router";

interface GroupInfo {
  name: string;
}

async function submitData(data: GroupInfo, router: NextRouter) {
  const submitted = await fetcher<{ id: string }>(
    "POST",
    "groups/create",
    data
  );
  if (submitted.data) {
    router.push(`dashboard?id=${submitted.data.id}`);
  } else {
    console.log("something went wrong");
  }
}

const CreateANewGroup = (props: {
  hidden?: boolean;
  toggleSelf: Dispatch<SetStateAction<boolean>>;
}) => {
  const [groupInfo, setGroupInfo] = useState<GroupInfo>({ name: "" });
  const router = useRouter();

  if (props.hidden) return null;
  return (
    <Flex minW={"md"} justifyContent={"space-between"} flexDir={"column"}>
      <Flex flexDir={"row"} w={"full"}>
        <Button
          onClick={(e) => {
            props.toggleSelf(false);
          }}
        >
          {"Back"}
        </Button>
        <Text fontSize={"3xl"} mb={5} w={"100%"} textAlign={"center"}>
          Create a new group
        </Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Flex flexDir={"column"}>
          <Text fontSize={"xl"}>Name:</Text>
          <Input
            placeholder={"the name of the group"}
            onChange={(e) => {
              setGroupInfo((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </Flex>
        <Button
          mt={5}
          bg={"blue.500"}
          color={"white"}
          _hover={{ bg: "blue.600" }}
          _active={{ bg: "blue.400" }}
          onClick={(e) => {
            submitData(groupInfo, router);
          }}
        >
          Create Group
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateANewGroup;
