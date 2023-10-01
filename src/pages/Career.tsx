import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import {
  Box,
  Flex,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { responsiveText, responsiveSpacing } from "../styles/responsive";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

import { MdCheck } from "react-icons/md";

import { motion, Variants } from "framer-motion";

import { CareerDataType } from "../types/careerTypes";
import { CAREER } from "../data/career";

export default function Career() {
  const { animation: animation1, animationRef: animationRef1 } =
    useScrollAnimation<HTMLDivElement>();
  const { animation: animation2, animationRef: animationRef2 } =
    useScrollAnimation<HTMLDivElement>();
  const { animation: animation3, animationRef: animationRef3 } =
    useScrollAnimation<HTMLDivElement>();

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
        {CAREER.map((career: CareerDataType, index: number) => (
          <Flex
            key={index}
            flexWrap={"wrap"}
            w="full"
            justifyContent={"center"}
            as={motion.div}
            ref={
              index === 0
                ? animationRef1
                : index === 1
                ? animationRef2
                : animationRef3
            }
            initial="hidden"
            animate={
              index === 0 ? animation1 : index === 1 ? animation2 : animation3
            }
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
                <Image src={career.logo} w={{ base: 100, md: 50, lg: 100 }} />
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
                  {career.name}
                </Text>
                <Text
                  fontSize={responsiveText.ContentsText}
                  my={responsiveSpacing.Text}
                  color="#b2b2b2"
                >
                  {career.duration}
                </Text>
                <Text
                  fontSize={responsiveText.ContentsText}
                  my={[3, 3, 3, 5]}
                  color="#616161"
                  whiteSpace="pre-wrap"
                >
                  {career.description}
                </Text>
                <hr style={{ margin: "1em 0", color: "#ddd" }} />
                {career.project.map((el, elIndex) => (
                  <Box key={elIndex}>
                    <Text
                      as="h3"
                      fontWeight={"900"}
                      fontSize={responsiveText.ContentsText}
                      color="#616161"
                      my={responsiveSpacing.Text}
                    >
                      {el.projectTitle}
                    </Text>
                    <List spacing={responsiveSpacing.Text}>
                      {el.projectDesc.map((desc, descIndex) => (
                        <ListItem key={descIndex} position="relative">
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
                            {desc}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Box>
            </Box>
          </Flex>
        ))}
      </Box>
    </Layout>
  );
}
