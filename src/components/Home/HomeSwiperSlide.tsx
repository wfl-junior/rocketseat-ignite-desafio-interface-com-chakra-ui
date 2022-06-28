import { Heading, Stack, Text } from "@chakra-ui/react";

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
    h={450}
  >
    <Heading as="h3" color="gray.100" fontWeight="bold" fontSize={48}>
      {heading}
    </Heading>

    <Text color="gray.300" fontWeight="bold" fontSize={24}>
      {description}
    </Text>
  </Stack>
);
