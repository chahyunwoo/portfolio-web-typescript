import styled, { keyframes, css } from "styled-components";
import {
  DragProps,
  SpinProps,
  ImageBoxProps,
} from "../types/projectContainerPcTypes";

export const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg)
  }

  to {
    transform: rotateY(360deg)
  }
`;

export const spinRevertAnimation = keyframes`
from {
  transform: rotateY(360deg)
}

to {
  transform: rotateY(0deg)
}
`;

export const ProjectsContainer = styled.div`
  display: flex;
  overflow: hidden;
  background: transprent;
  perspective: 2000px;
  transform-style: preserve-3d;
  height: 100%;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const Drag = styled.div<DragProps>`
  position: relative;
  display: flex;
  margin: auto;
  width: 100%;
  min-height: 1000px;
  transform-style: preserve-3d;
  transform: ${({ tX, tY }) =>
    `rotateX(${tY > 10 ? -10 : tY < 0 ? 0 : -tY}deg) rotateY(${tX}deg)`};
  transition: all 1s;
`;

export const Spin = styled.div<SpinProps>`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  transform: rotateX(0);
  animation: ${({ $click, rotatespeed, dragDirection }) =>
    $click
      ? dragDirection > 0
        ? css`
            ${spinAnimation} ${Math.abs(rotatespeed)}s infinite linear
          `
        : css`
            ${spinRevertAnimation} ${Math.abs(rotatespeed)}s infinite linear
          `
      : "none"};
  animation-play-state: ${({ $running }) => ($running ? "running" : "paused")};
`;

export const ImageBox = styled.div<ImageBoxProps>`
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-size: cover;
  box-shadow: 0 0 8px #fff;
  cursor: pointer;
  transform: ${({ $click, transform }) =>
    $click ? transform : "translateZ(0)"};
  transition: ${({ $resizing }) => ($resizing ? "none" : "transform 1s")};
  transition-delay: ${({ $click, transitiondelay }) =>
    $click ? `${transitiondelay}s` : null};
  background: ${({ image }: any) => `url(${image}) no-repeat center/cover`};
  -webkit-box-reflect: below 10px
  linear-gradient(transparent, transparent, #0005);

  &:hover {
    box-shadow: 0 0 15px #fffd;
    linear-gradient(transparent, transparent, #0007);

    &::after {
      content: "자세히 보기"
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 1)
    }
  }
`;

export const Ground = styled.div`
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
`;
