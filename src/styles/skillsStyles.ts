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

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
`;

export const FlexBox = styled(Flex)<ProgressCircleProps>`
  .frontend {
    left: ${({ activeStack }) => (activeStack.frontend ? "55%" : "5%")};
    top: ${({ activeStack }) => (activeStack.frontend ? "50%" : "20%")};
  }
  .mobile {
    left: ${({ activeStack }) => (activeStack.mobile ? "55%" : "5%")};
    top: ${({ activeStack }) => (activeStack.mobile ? "50%" : "50%")};
  }
  .etc {
    left: ${({ activeStack }) => (activeStack.etc ? "55%" : "5%")};
    top: ${({ activeStack }) => (activeStack.etc ? "50%" : "80%")};
  }
  .stack-circle {
    background-color: white;
    position: absolute;
    top: 12%;
    left: 12%;
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
  }
  .modal {
    display: ${({ activeModal }) => (activeModal ? "" : "none")};
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
  .modal-name {
    width: fit-content;
    background-color: #eaeaeaaf;
    border-radius: 12px;
    margin: 0 1rem;
    padding: 0.2rem 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
  }
  .modal-content {
    margin: 1rem 1.5rem;
    word-break: keep-all;
    line-height: 1.3rem;
    font-size: 0.9rem;
  }
  .skills {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
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

  .progress-wrap {
    transform: rotate(-90deg);
  }
  .skillname {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transform: rotate(90deg);
  }
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
