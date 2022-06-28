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
      h={500}
      align="center"
    >
      <Flex maxW={1160} w="100%" mx="auto" align="end" py="60px" h="100%">
        <Heading
          as="h1"
          color="gray.100"
          fontWeight="semibold"
          fontSize={48}
          lineHeight={1.5}
        >
          Europa
        </Heading>
      </Flex>
    </Flex>

    <Stack maxW={1160} mx="auto" mt={20} spacing={20}>
      <Flex align="center" justify="space-between">
        <Box w={600}>
          <Text fontWeight="normal" fontSize={24}>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <HStack spacing={42}>
          <Stack align="center">
            <Text as="strong" color="brand" fontSize={48} fontWeight="semibold">
              50
            </Text>

            <Text as="span" fontSize={24} fontWeight="semibold">
              países
            </Text>
          </Stack>

          <Stack align="center">
            <Text as="strong" color="brand" fontSize={48} fontWeight="semibold">
              60
            </Text>

            <Text as="span" fontSize={24} fontWeight="semibold">
              línguas
            </Text>
          </Stack>

          <Stack align="center">
            <Text as="strong" color="brand" fontSize={48} fontWeight="semibold">
              27
            </Text>

            <Text as="span" fontSize={24} fontWeight="semibold">
              cidades +100
            </Text>
          </Stack>
        </HStack>
      </Flex>

      <Stack spacing={10}>
        <Heading as="h2" fontSize={36} lineHeight={1.5} fontWeight="medium">
          Cidades +100
        </Heading>

        <Grid templateColumns="repeat(4, 1fr)" gap={45}>
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
