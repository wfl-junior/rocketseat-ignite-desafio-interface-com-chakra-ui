import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Fragment } from "react";
import { HomeIcon } from "../components/Home/HomeIcon";
import { HomeSwiper } from "../components/Home/HomeSwiper";

const Home: NextPage = () => (
  <Fragment>
    <Flex
      backgroundImage="url(/images/home-banner.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h={370}
      align="center"
    >
      <Flex
        maxW={1160}
        w="100%"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Stack spacing={5}>
          <Heading
            as="h1"
            color="gray.100"
            fontWeight="medium"
            fontSize={36}
            lineHeight={1.5}
          >
            6 Continentes, <br /> infinitas possibilidades.
          </Heading>

          <Text
            fontWeight="normal"
            color="gray.300"
            fontSize={20}
            lineHeight={1.5}
          >
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Stack>

        <Box transform="translateY(25%)">
          <Image src="/images/airplane.svg" />
        </Box>
      </Flex>
    </Flex>

    <SimpleGrid minChildWidth="20%" maxW={1160} mx="auto" mt={28}>
      <HomeIcon name="cocktail" label="vida noturna" />
      <HomeIcon name="surf" label="praia" />
      <HomeIcon name="building" label="moderno" />
      <HomeIcon name="museum" label="clássico" />
      <HomeIcon name="earth" label="e mais..." />
    </SimpleGrid>

    <Box bgColor="gray.900" h={1} mt={20} w={90} mx="auto" />

    <Heading
      className="heading"
      as="h2"
      my="52px"
      fontWeight="medium"
      textAlign="center"
      fontSize={36}
      lineHeight={1.625}
    >
      Vamos nessa? <br /> Então escolha seu continente
    </Heading>

    <Box maxW={1240} mx="auto">
      <HomeSwiper />
    </Box>
  </Fragment>
);

export default Home;
