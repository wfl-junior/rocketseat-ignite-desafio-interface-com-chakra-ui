import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "./Logo";

export const Header: React.FC = () => (
  <Flex
    as="header"
    align="center"
    justify="center"
    h="100px"
    position="sticky"
    top={0}
  >
    <Link href="/" passHref>
      <ChakraLink w="184px">
        <Logo />
      </ChakraLink>
    </Link>
  </Flex>
);
