import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HomeSwiperSlideProps {
  continent: string;
  heading: string;
  description: string;
}

export const HomeSwiperSlide: React.FC<HomeSwiperSlideProps> = ({
  continent,
  heading,
  description,
}) => (
  <Stack
    align="center"
    justify="center"
    spacing={4}
    bg={`linear-gradient(rgb(28 20 1 / 0.35), rgb(28 20 1 / 0.35)), url(/images/continents/${continent}.png)`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    bgColor="black"
    h={450}
  >
    <Link href={`/${continent}`} passHref>
      <ChakraLink
        href="#"
        color="gray.100"
        _hover={{ color: "brand" }}
        fontWeight="bold"
        fontSize={48}
      >
        {heading}
      </ChakraLink>
    </Link>

    <Text color="gray.300" fontWeight="bold" fontSize={24}>
      {description}
    </Text>
  </Stack>
);
