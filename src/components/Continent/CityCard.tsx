import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  citySlug: string;
  countrySlug: string;
  cityLabel: string;
  countryLabel: string;
}

export const CityCard: React.FC<CityCardProps> = ({
  citySlug,
  cityLabel,
  countryLabel,
  countrySlug,
}) => (
  <Stack
    bgColor="white"
    borderRadius={4}
    transition="transform 0.3s linear"
    _hover={{ transform: "scale(1.05) translateY(-3%)" }}
    boxShadow="0 0 5px rgb(0 0 0 / 0.1)"
  >
    <Image src={`/images/cities/${citySlug}.png`} />

    <HStack
      align="center"
      p={[3, 4, 5, 6]}
      justify="space-between"
      border="1px solid"
      borderColor="rgb(255 186 8 / 0.5)"
      mt="0 !important"
      borderTop={0}
      borderBottomRadius={4}
    >
      <Stack spacing={[1, 2, 3]}>
        <Text fontWeight="semibold" fontSize={20}>
          {cityLabel}
        </Text>

        <Text fontWeight="medium" fontSize={16} color="gray.700">
          {countryLabel}
        </Text>
      </Stack>

      <Box
        w="30px"
        h="30px"
        borderRadius="full"
        boxShadow="0 0 7px rgb(0 0 0 / 0.2)"
      >
        <Image src={`/images/flags/${countrySlug}.png`} />
      </Box>
    </HStack>
  </Stack>
);
