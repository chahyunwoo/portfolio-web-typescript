import { Box, Text } from "@chakra-ui/react";
import { ProgressBox, SkillProgress, RADIUS } from "../styles/skillsStyles";

const SkillStackCard = ({ value, name, open }: any) => {
  return (
    <ProgressBox>
      <Box className="progress-wrap" width="120px" height="120px">
        <SkillProgress value={value} name={name} open={open}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D1FFB8" />
              <stop offset="50%" stopColor="#BAE2E8" />
              <stop offset="90%" stopColor="#04c2c9" />
            </linearGradient>
          </defs>
          <circle
            className="frame"
            cx={60}
            cy={60}
            r={RADIUS}
            strokeWidth="6"
          />
          <circle
            className={`bar ${open ? "animate" : ""}`}
            cx={60}
            cy={60}
            r={RADIUS}
            strokeWidth="6"
          />
        </SkillProgress>
        <Text
          className="skillname"
          textAlign={"center"}
          lineHeight="120px"
          color="#616161"
        >
          {name}
        </Text>
      </Box>
    </ProgressBox>
  );
};

export default SkillStackCard;
