export interface SkillDataType {
  stack: string;
  name: string;
  value: number;
  className: string;
  content: string;
}

export type SkillSet = [string, SkillDataType[], string];

export interface OpenModalDataProps {
  stack: string;
  name: string;
  content: string;
}

export interface ProgressCircleProps {
  activemodal: string;
  activestack: {
    [key: string]: boolean;
  };
}

export interface CircleAnimationProps {
  translation?: number;
  rotation: number;
  rotate?: number;
  isRotate: boolean;
}
