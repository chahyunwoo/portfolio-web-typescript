import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import AboutCard from "../components/atoms/AboutCard";
import { MdSpeed } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

import {
  Text,
  Grid,
  Box,
  Image,
  Flex,
  HStack,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { responsiveText } from "../styles/responsive";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import picture from "../assets/images/chahyunwoo.png";

import { Gi3DHammer } from "react-icons/gi";

const AboutTitle = styled(Text)`
  width: 100%;
  margin: 1em 0;
  font-weight: bold;
`;

const AboutDesc = styled(Text)`
  color: #616161;

  @media (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

const AboutTitleBorderBottom = styled(AboutTitle)`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 1.5em;
    height: 0.1em;
    background-color: #ddd;
    bottom: -0.35em;
    left: 0;

    @media (max-width: 991px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: delay } },
});

export default function About() {
  const { animation, ref } = useScrollAnimation();

  return (
    <Layout backgroundColor="white" id="about" flexCenter>
      <SectionTitle direction="left">ABOUT</SectionTitle>
      <Box marginTop="4em">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={4}
        >
          <AboutCard icon={<MdSpeed />} delay={0}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={fadeIn(0)}
              style={{ width: "100%" }}
            >
              <AboutTitle as="p" fontSize={responsiveText.Text}>
                최적화
              </AboutTitle>
              <AboutDesc as="span">
                지연 없이 빠른 로딩 속도를 위한 <br />
                최적화 작업을 우선시합니다.
              </AboutDesc>
            </motion.div>
          </AboutCard>
          <AboutCard icon={<FaMobileAlt />} delay={0.2}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={fadeIn(0.2)}
              style={{ width: "100%" }}
            >
              <AboutTitle as="p" fontSize={responsiveText.Text}>
                반응형
              </AboutTitle>
              <AboutDesc as="span">
                다양한 해상도에서 <br />
                깔끔하고 일관된 레이아웃을 제작합니다.
              </AboutDesc>
            </motion.div>
          </AboutCard>
          <AboutCard icon={<GoLightBulb />} delay={0.4}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={fadeIn(0.4)}
              style={{ width: "100%" }}
            >
              <AboutTitle as={motion.p} fontSize={responsiveText.Text}>
                직관성
              </AboutTitle>
              <AboutDesc as="span">
                누구든지 사용하기 쉽고 직관적인 <br />
                UX/UI를 선호합니다.
              </AboutDesc>
            </motion.div>
          </AboutCard>
          <AboutCard icon={<BsFillRocketTakeoffFill />} delay={0.8}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={animation}
              variants={fadeIn(0.6)}
              style={{ width: "100%" }}
            >
              <AboutTitle as={motion.p} fontSize={responsiveText.Text}>
                역동적
              </AboutTitle>
              <AboutDesc as="span">
                정적이기보단 생생하고 역동적인 <br />웹 페이지를 추구합니다.
              </AboutDesc>
            </motion.div>
          </AboutCard>
        </Grid>
      </Box>
      <Box marginTop="4em">
        <Flex
          direction={{ base: "column", lg: "row" }}
          w="100%"
          gap={{ base: 10, lg: 100 }}
          justifyContent="center"
          alignItems="stretch"
        >
          <Box className="about-left">
            <Box boxSize={{ base: "240px", lg: "xs" }} mx="auto">
              <Image src={picture} alt="Cha Hyunwoo" objectFit="cover" />
            </Box>
            <Box marginTop="1em">
              <HStack
                fontSize={responsiveText.ContentsText}
                borderBottom="1px solid #ddd"
              >
                <Gi3DHammer size={36} />
                <AboutTitle>KEYWORLD</AboutTitle>
              </HStack>
              <VStack
                spacing={4}
                marginTop="1em"
                fontSize={responsiveText.ContentsText}
                marginBottom="1em"
                borderBottom="1px solid #ddd"
              >
                <HStack spacing={4}>
                  <Text>근면성실한</Text>
                  <Text>긍정적인</Text>
                </HStack>
                <HStack spacing={4} marginBottom="1em">
                  <Text>책임감있는</Text>
                  <Text>사교적인</Text>
                </HStack>
              </VStack>
              <Link href="https://github.com/chahyunwoo" isExternal>
                <Button
                  width="full"
                  variant="outline"
                  borderColor={"#04c2c9"}
                  color="#04c2c9"
                  alignItems={"center"}
                  _hover={{
                    bg: "#04c2c9",
                    color: "white",
                  }}
                >
                  <Text>VISIT TO GITHUB</Text>
                </Button>
              </Link>
            </Box>
          </Box>
          <Box className="about-right">
            <Box>
              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    이름
                  </AboutTitleBorderBottom>
                  <AboutDesc textAlign={{ base: "center", lg: "left" }}>
                    차 현 우
                  </AboutDesc>
                </Box>
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    생년월일
                  </AboutTitleBorderBottom>
                  <AboutDesc textAlign={{ base: "center", lg: "left" }}>
                    1993.03.12
                  </AboutDesc>
                </Box>
              </Flex>

              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    주소지
                  </AboutTitleBorderBottom>
                  <AboutDesc textAlign={{ base: "center", lg: "left" }}>
                    서울특별시 강서구
                  </AboutDesc>
                </Box>
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    연락처
                  </AboutTitleBorderBottom>
                  <AboutDesc textAlign={{ base: "center", lg: "left" }}>
                    010-6536-4999
                  </AboutDesc>
                </Box>
              </Flex>

              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    이메일
                  </AboutTitleBorderBottom>
                  <AboutDesc
                    letterSpacing={{ base: -0.6, lg: "unset" }}
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    chahyunwoobi@gmail.com
                  </AboutDesc>
                </Box>
                <Box flex={{ base: "0 0 50%", lg: "1" }} marginBottom="0.85em">
                  <AboutTitleBorderBottom
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    학력
                  </AboutTitleBorderBottom>
                  <AboutDesc textAlign={{ base: "center", lg: "left" }}>
                    숭실대학교
                  </AboutDesc>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
