import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import TwinLogo from "../assets/images/twinlogo.png";
import RncLogo from "../assets/images/rnclogo.png";
import OmetaLogo from "../assets/images/ometalogo.jpeg";

import { responsiveText, responsiveSpacing } from "../styles/responsive";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

import { MdCheck } from "react-icons/md";

import { motion, Variants } from "framer-motion";

export default function Career() {
  const { animation: animation1, animationRef: animationRef1 } =
    useScrollAnimation();
  const { animation: animation2, animationRef: animationRef2 } =
    useScrollAnimation();
  const { animation: animation3, animationRef: animationRef3 } =
    useScrollAnimation();

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Layout backgroundColor="#fff" id="career">
      <SectionTitle direction="right">CAREER</SectionTitle>
      <Box
        marginTop="4em"
        display={"flex"}
        justifyContent="center"
        w="full"
        flexDir={"column"}
        gap={20}
      >
        <Flex
          flexWrap={"wrap"}
          w="full"
          justifyContent={"center"}
          as={motion.div}
          ref={animationRef1}
          initial="hidden"
          animate={animation1}
          variants={fadeIn}
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            display="flex"
            justifyContent={"center"}
          >
            <Box
              w={{ base: 200, md: 150, lg: 200 }}
              h={{ base: 200, md: 150, lg: 200 }}
              borderRadius="50%"
              backgroundColor="#fff"
              border="1px solid #ddd"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src={TwinLogo} w={{ base: 100, md: 50, lg: 100 }} />
            </Box>
          </Box>
          <Box
            borderLeft={{ base: "none", md: "1px solid #ddd" }}
            marginTop={{ base: "5%", md: 0 }}
            paddingLeft={{ base: 0, md: "5%" }}
            w={{ base: "100%", md: "65%" }}
          >
            <Box>
              <Text
                as="h1"
                fontWeight={"900"}
                fontSize={["xl", "xl", "xl", "2xl"]}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                (주) 티윈
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={responsiveSpacing.Text}
                color="#b2b2b2"
              >
                2023.02 - 현재
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                LG전자의 협력사로 LG 마곡 사이언스파크에서 파견직으로 근무
                중이며, 현재 부팀장의 직책으로 업무를 수행 중에 있습니다.
              </Text>
              <hr style={{ margin: "1em 0", color: "#ddd" }} />
              <Box>
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  LG ThinQ App
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      LG전자 가전 IOT 서비스를 위한 ThinQ App의 공통 컴포넌트
                      개발 및 유지보수를 담당
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      NOTION을 직접 관리하여 팀원들과의 커뮤니케이션에 차질이
                      없도록 관리
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      대기업의 업무 프로세스를 이해하며, 형상관리, 코드리뷰 등
                      직접적인 소통을 통해 업무 진행
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Flex
          flexWrap={"wrap"}
          w="full"
          justifyContent={"center"}
          as={motion.div}
          ref={animationRef2}
          initial="hidden"
          animate={animation2}
          variants={fadeIn}
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            display="flex"
            justifyContent={"center"}
          >
            <Box
              w={{ base: 200, md: 150, lg: 200 }}
              h={{ base: 200, md: 150, lg: 200 }}
              borderRadius="50%"
              backgroundColor="#fff"
              border="1px solid #ddd"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src={RncLogo} w={{ base: 100, md: 50, lg: 100 }} />
            </Box>
          </Box>
          <Box
            borderLeft={{ base: "none", md: "1px solid #ddd" }}
            marginTop={{ base: "5%", md: 0 }}
            paddingLeft={{ base: 0, md: "5%" }}
            w={{ base: "100%", md: "65%" }}
          >
            <Box>
              <Text
                as="h1"
                fontWeight={"900"}
                fontSize={["xl", "xl", "xl", "2xl"]}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                (주) 래프트앤컴퍼니
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={responsiveSpacing.Text}
                color="#b2b2b2"
              >
                2021.11 - 2022.11
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                메인 프론트엔드 담당자로, React를 활용한 서비스 개발을 주로
                진행했습니다.
                <br />
                기획자 및 웹디자이너와 다양한 협업을 통해 프로젝트를
                수행했습니다.
              </Text>
              <hr style={{ margin: "1em 0", color: "#ddd" }} />
              <Box>
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  accountNFT
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      카카오 로그인과 같은 소셜 로그인 기능처럼 NFT로 로그인을
                      하는 웹 어플리케이션 프로젝트 수행
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      React Typescript 정적 타입을 사용하여 서비스의 안정화를
                      높임
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      React Native를 통해 하이브리드 앱을 제작 및 배포까지 진행
                    </Text>
                  </ListItem>
                </List>
              </Box>
              <Box marginTop="1em">
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  따솜 돌봄앤시터
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      가사도우미 구인 및 구직 플랫폼 프로젝트 수행
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      React Typescript 정적 타입을 사용하여 서비스의 안정화를
                      높임
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      Swagger를 사용해 api 문서를 제공받아 사용한 경험이 있으며,
                      Postman을 통해 api 테스트 진행
                    </Text>
                  </ListItem>
                </List>
              </Box>
              <Box marginTop="1em">
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  Pupping NFT
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      NFT 발행 사업으로, 민팅 페이지 및 랜딩 페이지 제작
                      프로젝트
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      React로 서비스 개발을 했으며, 다양한 모션 스크롤
                      애니메이션 라이브러리를 직접 수정해서 사용
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Flex
          flexWrap={"wrap"}
          w="full"
          justifyContent={"center"}
          as={motion.div}
          ref={animationRef3}
          initial="hidden"
          animate={animation3}
          variants={fadeIn}
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            display="flex"
            justifyContent={"center"}
          >
            <Box
              w={{ base: 200, md: 150, lg: 200 }}
              h={{ base: 200, md: 150, lg: 200 }}
              borderRadius="50%"
              backgroundColor="#fff"
              border="1px solid #ddd"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Image src={OmetaLogo} w={{ base: 100, md: 50, lg: 100 }} />
            </Box>
          </Box>
          <Box
            borderLeft={{ base: "none", md: "1px solid #ddd" }}
            marginTop={{ base: "5%", md: 0 }}
            paddingLeft={{ base: 0, md: "5%" }}
            w={{ base: "100%", md: "65%" }}
          >
            <Box>
              <Text
                as="h1"
                fontWeight={"900"}
                fontSize={["xl", "xl", "xl", "2xl"]}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                (주) 오메타 (비알스톰)
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={responsiveSpacing.Text}
                color="#b2b2b2"
              >
                2019.11 - 2021.10
              </Text>
              <Text
                fontSize={responsiveText.ContentsText}
                my={[3, 3, 3, 5]}
                color="#616161"
              >
                개발팀의 팀원으로, 퍼블리싱 및 프론트엔드 개발 업무에
                투입되었습니다.
                <br />
                다수의 팀원들과 형상관리를 통해 프로젝트를 진행했습니다.
              </Text>
              <hr style={{ margin: "1em 0", color: "#ddd" }} />
              <Box>
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  DIBIDIBI
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      비디오 커머셜 플랫폼으로 관리자 페이지 퍼블리싱 및 개발
                      업무 진행
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      Vue.js를 사용하여 데이터를 효율적으로 처리하며, 안정적이고
                      빠른 응답성을 제공
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      스타일 가이드를 문서화시키고 구조화했습니다.
                    </Text>
                  </ListItem>
                </List>
              </Box>
              <Box marginTop="1em">
                <Text
                  as="h3"
                  fontWeight={"900"}
                  fontSize={responsiveText.ContentsText}
                  color="#616161"
                  my={responsiveSpacing.Text}
                >
                  웹툰 저작물 중개 플랫폼
                </Text>
                <List spacing={responsiveSpacing.Text}>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      웹툰 작가와, 포털 사이트 웹툰 담당자와의 원활한 계약을
                      위한 중개 서비스를 제공하는 플랫폼
                    </Text>
                  </ListItem>
                  <ListItem position="relative">
                    <ListIcon
                      as={MdCheck}
                      color="#04c2c9"
                      position={"absolute"}
                      top="3px"
                    />
                    <Text
                      as="span"
                      display={"inline-block"}
                      paddingLeft="5"
                      color="#616161"
                    >
                      React를 사용하여 안정적인 렌더링과, 재사용을 위한 컴포넌트
                      개발 및 가독성을 위한 코드 정리
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
