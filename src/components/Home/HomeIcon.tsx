import { Image, Stack, Text } from "@chakra-ui/react";

interface HomeIconProps {
  name: string;
  label: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ name, label }) => (
  <Stack alignItems="center" spacing={6}>
    <Image src={`/images/icons/${name}.svg`} w={85} h={85} />

    <Text fontWeight="semibold" fontSize={24}>
      {label}
    </Text>
  </Stack>
);
