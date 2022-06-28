import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft } from "./icons/ChevronLeft";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      as="header"
      h="100px"
      position="sticky"
      top={0}
      bgColor="gray.100"
      zIndex={100}
      boxShadow="0 3px 10px rgb(0 0 0 / 0.2)"
    >
      <Flex
        align="center"
        justify="center"
        h="100%"
        maxW={1160}
        mx="auto"
        position="relative"
      >
        {router.asPath !== "/" && (
          <Flex
            as="button"
            align="center"
            justify="center"
            position="absolute"
            left={0}
            onClick={() => router.back()}
            w={8}
            h={8}
          >
            <ChevronLeft />
          </Flex>
        )}

        <Link href="/" passHref>
          <ChakraLink w="184px">
            <Logo />
          </ChakraLink>
        </Link>
      </Flex>
    </Box>
  );
};
