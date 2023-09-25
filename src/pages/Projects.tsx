import Layout from "../layouts/Layout";
import SectionTitle from "../components/atoms/SectionTitle";
import { Box } from "@chakra-ui/react";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  memo,
} from "react";
import { useDrag } from "react-use-gesture";

import project1 from "../assets/images/accountnft850.png";
import project2 from "../assets/images/dibidibi850.png";
import project3 from "../assets/images/fredericmalle850.png";
import project4 from "../assets/images/lgthinqpp850.png";
import project5 from "../assets/images/portfolio850.png";
import project6 from "../assets/images/pupping850.png";
import project7 from "../assets/images/saltaewol850.png";
import project8 from "../assets/images/tasomcare850.png";
import project9 from "../assets/images/todolist850.png";

import styled, { keyframes, css } from "styled-components";
import { throttle } from "lodash";

interface ImageBoxProps {
  image: string;
  transform: string;
  transitiondelay: number;
  $click: boolean;
}

interface DragProps {
  tX: number;
  tY: number;
}

interface SpinProps {
  rotatespeed: number;
  $running: boolean;
  $click: boolean;
  dragDirection: number;
}

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg)
  }

  to {
    transform: rotateY(360deg)
  }
`;

const spinRevertAnimation = keyframes`
from {
  transform: rotateY(360deg)
}

to {
  transform: rotateY(0deg)
}
`;

const ProjectsContainer = styled.div`
  display: flex;
  overflow: hidden;
  background: #070716;
  perspective: 2000px;
  transform-style: preserve-3d;
  height: calc(100vh - 4.5rem);
`;

const Drag = styled.div<DragProps>`
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  transform: ${({ tX, tY }) =>
    `rotateX(${tY > 40 ? -40 : tY < 0 ? 0 : -tY}deg) rotateY(${tX}deg)`};
  transition: all 1s;
`;

const Spin = styled.div<SpinProps>`
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

const ImageBox = memo(styled.div<ImageBoxProps>`
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
  transition: transform 1s;
  transition-delay: ${({ $click, transitiondelay }) =>
    $click ? `${transitiondelay}s` : null};
  background: ${({ image }: any) => `url(${image}) no-repeat center/cover`};
  -webkit-box-reflect: below 10px
  linear-gradient(transparent, transparent, #0005);

  &:hover {
    box-shadow: 0 0 15px #fffd;
    linear-gradient(transparent, transparent, #0007);
  }
`);

const MoreButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Ground = styled.div`
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
`;

export default function Projects() {
  const projectImages = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
  ];
  const [items] = useState(
    [...Array(9)].map((_, i) => ({ id: i, image: projectImages[i] }))
  );
  const [transforms, setTransforms] = useState<string[]>([]);
  const [transitionDelays, setTransitionDelays] = useState<number[]>([]);
  const [click, setClick] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  const radius = 550;
  const rotateSpeed = -60;
  const imgBoxWidth = 300;
  const imgBoxHeight = 300;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const spinRef = useRef<HTMLDivElement | null>(null);
  const groundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (spinRef.current) {
      spinRef.current.style.width = `${imgBoxWidth}px`;
      spinRef.current.style.height = `${imgBoxHeight}px`;
    }

    if (groundRef.current) {
      groundRef.current.style.width = `${radius * 3}px`;
      groundRef.current.style.height = `${radius * 3}px`;
    }
  }, []);

  const newTransforms = useMemo(() => {
    return items.map(
      (_, index) =>
        `rotateY(${index * (360 / items.length)}deg) translateZ(${radius}px)`
    );
  }, [items]);

  const newTransitionDelays = useMemo(() => {
    return items.map((_, index) => (items.length - index) / 4);
  }, [items]);

  const handleClick = () => {
    if (!click) {
      setClick(true);
      setTransforms(newTransforms);
      setTransitionDelays(newTransitionDelays);
    }
  };

  const [dragging, setDragging] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  const sXRef = useRef(0);
  const sYRef = useRef(0);
  const nXRef = useRef(0);
  const nYRef = useRef(0);
  const desXRef = useRef(0);
  const desYRef = useRef(0);
  const tXRef = useRef(0);
  const tYRef = useRef(10);
  const timerRef = useRef<number | null>(null);
  const dragDirectionRef = useRef(1);

  let sX = sXRef.current;
  let sY = sYRef.current;
  let nX = nXRef.current;
  let nY = nYRef.current;
  let desX = desXRef.current;
  let desY = desYRef.current;
  let tX = tXRef.current;
  let tY = tYRef.current;
  let timer = timerRef.current;

  const easing = 0.5;

  const playSpin = (bool: boolean) => {
    setIsRunning(bool);
  };

  const handleMouseDown = useCallback((e: any) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    sXRef.current = e.clientX;
    sYRef.current = e.clientY;
    setDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseMoveCallback = useCallback(
    (e: any) => {
      if (dragging) {
        nXRef.current = e.clientX;
        nYRef.current = e.clientY;

        desXRef.current +=
          (nXRef.current - sXRef.current - desXRef.current) * easing;
        desYRef.current +=
          (nYRef.current - sYRef.current - desYRef.current) * easing;

        tXRef.current = tXRef.current + desXRef.current * 0.1;
        tYRef.current = tYRef.current + desYRef.current * 0.1;

        playSpin(false);

        sXRef.current = nXRef.current;
        sYRef.current = nYRef.current;
      }
    },
    [dragging]
  );

  const handleMouseMove = throttle(handleMouseMoveCallback, 16);

  const handleMouseUp = useCallback(() => {
    setDragging(false);

    const dragDirectionValue = nXRef.current - sXRef.current > 0 ? 1 : -1;
    dragDirectionRef.current = dragDirectionValue;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(() => {
      desXRef.current = desXRef.current * easing;
      desYRef.current = desYRef.current * easing;
      tXRef.current = tXRef.current + desXRef.current * 0.1;
      tYRef.current = tYRef.current + desYRef.current * 0.1;

      if (Math.abs(desXRef.current) < 0.5 && Math.abs(desYRef.current) < 0.5) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        playSpin(true);
      }
    }, 17);
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <ProjectsContainer
      as="div"
      onClick={handleClick}
      ref={containerRef}
      draggable={true}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Drag ref={dragRef} tX={tX} tY={tY}>
        <Spin
          ref={spinRef}
          rotatespeed={rotateSpeed}
          $running={isRunning}
          $click={click}
          dragDirection={dragDirectionRef.current}
        >
          {items.map((item, index) => {
            return (
              <ImageBox
                key={index}
                image={item.image}
                transform={transforms[index]}
                transitiondelay={transitionDelays[index]}
                $click
              >
                <MoreButton>더 보기</MoreButton>
              </ImageBox>
            );
          })}
        </Spin>
        <Ground ref={groundRef}></Ground>
      </Drag>
    </ProjectsContainer>
  );
}

// function applyTransform(obj) {
//   if (tY > 180) tY = 180;
//   if (tY < 0) tY = 0;

//   obj.style.transform = `rotateX(${-tY})deg rotateY(${tX})deg`
// }

// function playSpin(bool) {
//   ospin.style.animtionPlayState = bool ? 'running' : 'paused'
// }

// window.onpointerdown = function (e) {
//   this.clearInterval(odrag.timer)

//   e = e || this.window.event;

//   sX = e.clientX,
//   sY = e.clientY;

// this.onpointermove = function (e) {
//   e = e || window.event;

//   nX = e.clientX;
//   nY = e.clientY;

//   desX = nX - sX;
//   desY = nY - sY;
//   tX += desX * 0.1;
//   tY += desY * 0.1;

//   applyTransform(odrag);

//   sX = nX;
//   sY = nY;
// }

// this.onpointerup = function (e) {
//   odrag.timer = setInterval((function () {
//     desX *= 0.95;
//     desY *= 0.95;
//     tX += desX * 0.1;
//     tY += desY * 0.1;

//     applyTransform(odrag);

//     playSpin(false);

//     if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//       clearInterval(odrag.timer)
//       playSpin(true)
//     }
//   }), 17)

//   this.onpointermove = this.onpointerup = null
// }

// return false;
// }
