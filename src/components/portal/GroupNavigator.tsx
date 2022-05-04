import { Box, Text } from "@chakra-ui/react";

const GroupNavigator = (props: { hidden?: boolean }) => {
  if (props.hidden) return null;
  return (
    <Box>
      <Text fontSize={"4xl"} mb={5}>
        Your Portal
      </Text>
    </Box>
  );
};
export default GroupNavigator;
