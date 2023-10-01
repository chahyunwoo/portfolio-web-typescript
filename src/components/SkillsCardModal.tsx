import { Box } from "@chakra-ui/react";
import { Card } from "../styles/skillsStyles";
import { OpenModalDataProps } from "../types/skillsTypes";

interface SkillsCardModalType {
  modalContents: OpenModalDataProps | null;
}

export default function SkillsCardModal({
  modalContents,
}: SkillsCardModalType) {
  if (!modalContents) return null;

  return (
    <Card className="modal">
      <Box
        w="fit-content"
        bg="#eaeaeaaf"
        borderRadius="12px"
        m="0 1rem"
        p="0.2rem 0.5rem"
        fontWeight={600}
        fontSize="0.95rem"
      >
        {modalContents.name}
      </Box>
      <Box
        m="1rem 1.5rem"
        wordBreak={"keep-all"}
        lineHeight="1.3rem"
        fontSize={"0.9rem"}
      >
        {modalContents.content}
      </Box>
    </Card>
  );
}
