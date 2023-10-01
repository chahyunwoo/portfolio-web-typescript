import { Box, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

import {
  ProgressCircleProps,
  CircleAnimationProps,
} from "../types/skillsTypes";

interface ProgressProps {
  value: number;
  name?: string;
  open?: boolean;
}

/* Skills Style */
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: transparent;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
`;

export const FlexBox = styled(Flex)<ProgressCircleProps>`
  .frontend {
    left: ${({ activestack }) => (activestack.frontend ? "55%" : "5%")};
    top: ${({ activestack }) => (activestack.frontend ? "50%" : "20%")};
  }
  .mobile {
    left: ${({ activestack }) => (activestack.mobile ? "55%" : "5%")};
    top: ${({ activestack }) => (activestack.mobile ? "50%" : "50%")};
  }
  .etc {
    left: ${({ activestack }) => (activestack.etc ? "55%" : "5%")};
    top: ${({ activestack }) => (activestack.etc ? "50%" : "80%")};
  }

  .modal {
    display: ${({ activemodal }) => (activemodal ? "" : "none")};
    position: absolute;
    width: 200px;
    height: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-17%, -10%);
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
    z-index: 10;
  }
`;

export const CircleAnimation = styled.div<CircleAnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 1.2s;
  transform: ${({ isRotate, rotation }) =>
    isRotate
      ? ` rotate(${rotation}deg) translate(300px) rotate(-${rotation}deg)`
      : `rotate(0deg) translate(0px) `};
`;

/* SkillStack Style */
export const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ProgressBox = styled(Box)`
  position: relative;
`;

export const SkillProgress = styled.svg<ProgressProps>`
  width: 120px;
  height: 120px;
  .frame {
    fill: white;
    stroke: #f5f5f5b2;
  }
  .bar {
    fill: transparent;
    stroke: url(#gradient);
    stroke-linecap: round;
    stroke-dashoffset: ${({ name, value }) =>
      name ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE};
    stroke-dasharray: ${CIRCUMFERENCE};
    transition: 1.8s ease-in-out;
  }
  .animate {
    stroke-dashoffset: ${({ value }) => CIRCUMFERENCE * (1 - value / 100)};
  }
`;
