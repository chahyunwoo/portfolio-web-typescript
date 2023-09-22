import { HStack, Text, VStack } from "@chakra-ui/react";
import { Gi3DHammer } from "react-icons/gi";
import { AboutTitle } from "../styles/about";
import { responsiveText } from "../styles/responsive";

export default function KeyworldBox() {
  return (
    <>
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
    </>
  );
}
