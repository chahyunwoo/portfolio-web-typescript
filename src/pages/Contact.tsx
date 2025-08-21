import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import { useState, useEffect } from "react";
import { Input, Box, Textarea, Button, useToast, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const scale = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [lastSubmitted, setLastSubmitted] = useState<number | null>(null);
  const [canSubmit, setCanSubmit] = useState(true);

  const { animation: animation1, animationRef: animationRef1 } =
    useScrollAnimation<HTMLParagraphElement>();
  const { animation: animation2, animationRef: animationRef2 } =
    useScrollAnimation<HTMLFormElement>();

  useEffect(() => {
    if (lastSubmitted !== null) {
      const timeSinceLastSubmit = Date.now() - lastSubmitted;
      if (timeSinceLastSubmit < 30000) {
        setCanSubmit(false);
        const timeLeft = 30000 - timeSinceLastSubmit;
        setTimeout(() => setCanSubmit(true), timeLeft);
      }
    }
  }, [lastSubmitted]);

  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSubmit) {
      toast({
        title: "경고",
        description: "잠시 후 다시 시도해주세요.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setLastSubmitted(Date.now());
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(
        (response) => {
          console.log("SUCCESS!!", response.status, response.text);
          toast({
            title: "성공",
            description: "전송되었습니다.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        },
        (error) => {
          console.error("FAILED...", error);
          toast({
            title: "오류",
            description: "전송에 실패했습니다.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Layout backgroundColor="#252934" id="contact" decoration>
      <SectionTitle direction="left" isWhiteColor={true}>
        CONTACT
      </SectionTitle>

      <Box textAlign={"center"}>
        <Text
          my={4}
          color="#04c2c9"
          as={motion.p}
          ref={animationRef1}
          initial="hidden"
          animate={animation1}
          variants={fadeIn}
        >
          문의사항은 아래 내용을 입력 후 전송바랍니다.
        </Text>
        <Box
          as={motion.form}
          onSubmit={handleSubmit}
          w="100%"
          maxW="md"
          mx="auto"
          mt={8}
          ref={animationRef2}
          initial="hidden"
          animate={animation2}
          variants={scale}
        >
          <Input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            required
            mb={2}
            color="white"
            focusBorderColor="#04c2c9"
          />
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            required
            mb={2}
            color="white"
            focusBorderColor="#04c2c9"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="전화번호"
            value={formData.phone}
            onChange={handleChange}
            required
            mb={2}
            color="white"
            focusBorderColor="#04c2c9"
          />
          <Textarea
            name="message"
            placeholder="내용을 입력하세요."
            value={formData.message}
            onChange={handleChange}
            required
            mb={2}
            color="white"
            focusBorderColor="#04c2c9"
            rows={10}
          />
          <Button
            type="submit"
            w="full"
            variant={"outline"}
            sx={{
              borderColor: "white",
              color: "white",
              bg: "transparent",
              _hover: {
                bg: "#04c2c9",
                borderColor: "transparent",
              },
            }}
          >
            보내기
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
