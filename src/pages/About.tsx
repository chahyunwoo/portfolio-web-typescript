import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import HexagonCard from "../components/atoms/HexagonCard";
import { MdSpeed } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { GoLightBulb } from "react-icons/go";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

import { Text, Grid, Box, Flex, Button } from "@chakra-ui/react";

import picture from "../assets/images/chahyunwoo.png";

import AboutLayout from "../layouts/AboutLayout";
import PictureBox from "../components/PictureBox";
import KeyworldBox from "../components/KeyworldBox";
import IntroduceText from "../components/IntroduceText";
import CardContents from "../components/CardContents";

const cardData = [
  {
    icon: <MdSpeed />,
    title: "최적화",
    desc: `지연 없이 빠른 로딩 속도를 위한 
    최적화 작업을 우선시합니다.`,
    delay: 0,
  },
  {
    icon: <FaMobileAlt />,
    title: "반응형",
    desc: `다양한 해상도에서 
    깔끔하고 일관된 레이아웃을 제작합니다.`,
    delay: 0.2,
  },
  {
    icon: <GoLightBulb />,
    title: "직관성",
    desc: `누구든지 사용하기 쉽고 직관적인 
    UX/UI를 선호합니다.`,
    delay: 0.4,
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    title: "역동적",
    desc: `정적이기보단 생생하고 역동적인 
    웹 페이지를 추구합니다.`,
    delay: 0.6,
  },
];

export default function About() {
  return (
    <Layout backgroundColor="#f5f5f5" id="about" flexCenter>
      <SectionTitle direction="left">ABOUT</SectionTitle>
      <Box marginTop="4em">
        <Flex
          direction={{ base: "column", lg: "row" }}
          w="100%"
          gap={{ base: 10, lg: 100 }}
          justifyContent="center"
          alignItems="stretch"
        >
          <AboutLayout className="left">
            <PictureBox imageSrc={picture} imageAlt="Cha Hyunwoo" />
            <Box marginTop="1em">
              <KeyworldBox />
              <Flex gap={4}>
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
                  as="a"
                  href="https://github.com/chahyunwoo"
                  target="_blank"
                  textDecoration="none"
                >
                  <Text userSelect="none">GITHUB</Text>
                </Button>
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
                  as="a"
                  href="https://chahyunwoo.dev"
                  target="_blank"
                  textDecoration="none"
                >
                  <Text userSelect="none">BLOG</Text>
                </Button>
              </Flex>
            </Box>
          </AboutLayout>
          <AboutLayout className="right">
            <Box>
              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <IntroduceText titleName="이름" titleContents="차 현 우" />
                <IntroduceText
                  titleName="생년월일"
                  titleContents="1993.03.12"
                />
              </Flex>
              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <IntroduceText
                  titleName="주소지"
                  titleContents="인천광역시 서구"
                />
                <IntroduceText
                  titleName="연락처"
                  titleContents="010-6536-4999"
                />
              </Flex>
              <Flex direction={{ base: "row", lg: "column" }} wrap="wrap">
                <IntroduceText
                  titleName="이메일"
                  titleContents="chahyunwoobi@gmail.com"
                  letterSpacing={-0.7}
                />
                <IntroduceText titleName="학력" titleContents="숭실대학교" />
              </Flex>
            </Box>
          </AboutLayout>
        </Flex>
      </Box>
      <Box marginTop="4em">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={4}
        >
          {cardData.map((card, index) => (
            <HexagonCard icon={card.icon} delay={card.delay} key={index}>
              <CardContents
                title={card.title}
                desc={card.desc}
                delay={card.delay}
              />
            </HexagonCard>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
