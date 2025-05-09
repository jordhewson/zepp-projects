import {
  SCREEN,
  colors,
  fontFamily,
  fontSize,
  primaryFont,
} from '../utils/constants';

export const bgProps = {
  x: 0,
  y: 0,
  src: 'background/background.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const bgConfig = [
  { id: 1, preview: 'background/bg1.png', path: 'background/bg1.png' },
  { id: 2, preview: 'background/bg2.png', path: 'background/bg2.png' }
];

export const bgLevel = [
  'background/bg0.png',
  'background/bg1.png',
  'background/bg2.png',
  'background/bg3.png',
  'background/bg4.png'
];

export const pointerProps = {
  hour_centerX: SCREEN.centerX,
  hour_centerY: SCREEN.centerY,
  hour_posX: SCREEN.centerX,
  hour_posY: SCREEN.centerY,
  hour_path: 'pointers/hour.png',
  minute_centerX: SCREEN.centerX,
  minute_centerY: SCREEN.centerY,
  minute_posX: SCREEN.centerX,
  minute_posY: SCREEN.centerY,
  minute_path: 'pointers/minute.png',
  minute_cover_path: 'pointers/cover.png',
  minute_cover_y: 0,
  minute_cover_x: 0,
};

export const dayText = {
  x: 180,
  y: -50,
  w: 120,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.cursive,
  color: colors.secondary,
  text_size: fontSize.primary,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateText = {
  x: 195,
  y: -80,
  w: 90,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.secondary,
  text: '0',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const topDialArc = {
  center_x: 240,
  center_y: 180,
  radius: 30,
  start_angle: -180,
  end_angle: 180,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const topDialIcon = {
  x: 225,
  y: 165,
  src: 'widget/icon/lotus.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const leftDialArc = {
  ...topDialArc,
  center_x: 180,
  center_y: 240,
};

export const leftDialIcon = {
  ...topDialIcon,
  x: 165,
  y: 225,
  src: 'widget/icon/sport.png',
};

export const bottomDialArc = {
  ...topDialArc,
  center_x: 240,
  center_y: 300,
};

export const bottomDialIcon = {
  ...topDialIcon,
  x: 225,
  y: 285,
  src: 'widget/icon/sleep.png',
};

export const arc1 = {
  center_x: 240,
  center_y: 240,
  radius: 200,
  start_angle: 240,
  end_angle: 300,
  line_width: 5
};

export const circle1 = {
  center_x: 450,
  center_y: 240,
  radius: 20,
  alpha: 255
};

export const icon1 = {
  x: 76,
  y: 78,
  angle: 0
};

export const arc2 = {
  ...arc1,
  start_angle: 210,
  end_angle: 150,
};

export const circle2 = {
  ...circle1,
  center_x: 450,
  center_y: 240
};

export const icon2 = {
  x: 370,
  y: 80,
  angle: 0
};

export const arc3 = {
  ...arc1,
  start_angle: 120,
  end_angle: 60,
};

export const circle3 = {
  ...circle1,
  center_x: 240,
  center_y: 450
};

export const icon3 = {
  x: 370,
  y: 370,
  angle: 0
};

export const arc4 = {
  ...arc1,
  start_angle: 180 + 45,
  end_angle: 270 + 45,
};

export const circle4 = {
  ...circle1,
  center_x: 30,
  center_y: 240
};

export const icon4 = {
  x: 80,
  y: 370,
  angle: 0
};
