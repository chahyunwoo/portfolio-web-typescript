import { Box, Container, Icon, Text, Link } from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <Box width="100%" backgroundColor="#1b242f" as="footer">
        <Container maxW="container.xl">
          <Box width="100%" textAlign={"center"} py={16}>
            <Link href="https://github.com/chahyunwoo" isExternal>
              <Icon as={FaGithub} color="white" w={12} h={12} marginRight={5} />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <Icon
                as={FaFacebook}
                color="white"
                w={12}
                h={12}
                marginRight={5}
              />
            </Link>
            <Link href="https://instagram.com/aavecvous" isExternal>
              <Icon
                as={FaInstagram}
                color="white"
                w={12}
                h={12}
                marginRight={5}
              />
            </Link>
            <Link href="mailto:chahyunwoobi@gmail.com">
              <Icon as={FiMail} color="white" w={12} h={12} />
            </Link>
            <Text color="white" my={3}>
              &copy; 2023. Cha Hyun Woo. All rights reserved.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}
