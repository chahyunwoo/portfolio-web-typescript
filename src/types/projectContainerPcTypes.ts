export interface ImageBoxProps {
  image: string;
  transform: string;
  transitiondelay: number;
  $click: boolean;
  $resizing: boolean;
}

export interface DragProps {
  tX: number;
  tY: number;
  imgBoxHeight: number;
}

export interface SpinProps {
  rotatespeed: number;
  $running: boolean;
  $click: boolean;
  dragDirection: number;
}
