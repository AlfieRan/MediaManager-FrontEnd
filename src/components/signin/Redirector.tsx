import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/router";

const Redirector = () => {
  const router = useRouter();
  useEffect(() => {
    fetcher<boolean>("GET", "user/isloggedin", null, true).then((res) => {
      if (res.code === 403) {
        router.push("signin");
      }
    });
  }, []);

  return <Box w={"0"} h={"0"} />;
};

export default Redirector;
