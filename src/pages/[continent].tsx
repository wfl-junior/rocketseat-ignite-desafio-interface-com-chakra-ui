import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Fragment } from "react";
import { CityCard } from "../components/Continent/CityCard";

const Continent: NextPage = () => (
  <Fragment>
    <Flex
      bg={`linear-gradient(to top, rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.25)), url(/images/banners/europe-banner.png)`}
      bgColor="black"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h={[150, 250, 350, 450, 500]}
      align="center"
    >
      <Flex
        maxW={1160}
        w="100%"
        mx="auto"
        py="60px"
        h="100%"
        px={[4, 5, 6]}
        justifyContent={{ base: "center", md: "start" }}
        alignItems={{ base: "center", md: "end" }}
      >
        <Heading
          as="h1"
          color="gray.100"
          fontWeight="semibold"
          fontSize={[28, 34, 38, 42, 48]}
          lineHeight={1.5}
        >
          Europa
        </Heading>
      </Flex>
    </Flex>

    <Stack
      maxW={1160}
      mx="auto"
      mt={["24px", "38px", "52px", "66px", "80px"]}
      spacing={["24px", "38px", "52px", "66px", "80px"]}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        px={[4, 5, 6]}
        gap={4}
      >
        <Box maxW={600}>
          <Text fontWeight="normal" fontSize={[14, 16, 18, 21, 24]}>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <HStack spacing={["30px", "34px", "38px", "42px"]}>
          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              50
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
            >
              países
            </Text>
          </Stack>

          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              60
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
            >
              línguas
            </Text>
          </Stack>

          <Stack
            spacing={{ base: 0, lg: 1 }}
            align={{ base: "left", lg: "center" }}
          >
            <Text
              as="strong"
              color="brand"
              fontSize={[24, 30, 36, 42, 48]}
              fontWeight="semibold"
            >
              27
            </Text>

            <Text
              as="span"
              fontSize={[18, 20, 22, 24]}
              fontWeight={{ base: "normal", md: "medium", lg: "semibold" }}
            >
              cidades +100
            </Text>
          </Stack>
        </HStack>
      </Flex>

      <Stack spacing={10} px={[4, 5, 6]}>
        <Heading
          as="h2"
          fontSize={[24, 26, 28, 32, 36]}
          lineHeight={1.5}
          fontWeight="medium"
        >
          Cidades +100
        </Heading>

        <Grid
          gap={["20px", "25px", "30px", "35px", "45px"]}
          placeItems="center"
          templateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <CityCard
            citySlug="london"
            cityLabel="Londres"
            countryLabel="Reino Unido"
            countrySlug="united-kingdom"
          />

          <CityCard
            citySlug="paris"
            cityLabel="Paris"
            countryLabel="França"
            countrySlug="france"
          />

          <CityCard
            citySlug="rome"
            cityLabel="Roma"
            countryLabel="Itália"
            countrySlug="italy"
          />

          <CityCard
            citySlug="prague"
            cityLabel="Praga"
            countryLabel="República Tcheca"
            countrySlug="czech-republic"
          />

          <CityCard
            citySlug="amsterdam"
            cityLabel="Amsterdã"
            countryLabel="Holanda"
            countrySlug="netherlands"
          />
        </Grid>
      </Stack>
    </Stack>
  </Fragment>
);

export default Continent;
