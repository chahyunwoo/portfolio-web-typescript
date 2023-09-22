import { Box, Image } from "@chakra-ui/react";

interface Props {
  imageSrc: string;
  imageAlt: string;
}

export default function PictureBox({ imageSrc, imageAlt }: Props) {
  return (
    <Box boxSize={{ base: "240px", lg: "xs" }} mx="auto">
      <Image src={imageSrc} alt={imageAlt} objectFit="cover" />
    </Box>
  );
}
