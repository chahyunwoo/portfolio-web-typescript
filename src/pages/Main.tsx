import Layout from "../layouts/Layout";
import { Box, Flex, Text, VStack, Button } from "@chakra-ui/react";

import { responsiveText, responsiveSpacing } from "../styles/responsive";

import { FaArrowDown } from "react-icons/fa";

import { Link } from "react-scroll";

export default function Main() {
  return (
    <Layout
      backgroundColor="#252934"
      id="main-section"
      height="100vh"
      canvas
      flexCenter
    >
      <Box width="100%" color="#eee">
        <Flex flexDirection={"column"} justifyContent="center">
          <hr
            style={{
              width: "3.5rem",
              margin: "1.5rem auto",
              height: "0",
              border: "none",
              borderTop: "0.2rem solid #f4623a",
            }}
          />
          <VStack
            textAlign={"center"}
            fontSize={responsiveText.Text}
            spacing={responsiveSpacing.Text}
          >
            <Text as="p">안녕하세요.</Text>
            <Text as="p">
              프론트엔드 웹 개발자{" "}
              <Text as="span" color="#f4623a">
                차현우
              </Text>
              입니다.
            </Text>
            <Text as="p">소통과 약속을 중요시하게 생각합니다.</Text>
            <Text
              as="span"
              marginTop={"2rem"}
              fontSize={["sm", "md", "md", "md"]}
              opacity={0.6}
            >
              해당 포트폴리오는 React TypeScript, Chakra UI를 통해
              제작되었습니다.
            </Text>
          </VStack>
          <Box textAlign={"center"} marginTop={10}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-72}
              style={{ pointerEvents: "auto" }}
            >
              <Button
                rightIcon={<FaArrowDown />}
                variant="solid"
                size="md"
                backgroundColor="#f4623a"
                color="#eee"
                border="1px solid transparent"
                _hover={{ bg: "#DE372A" }}
                p={4}
              >
                더 알아보기
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
