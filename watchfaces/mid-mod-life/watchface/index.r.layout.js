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
  x: 318,
  y: 50,
  w: 60,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.secondary,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateText = {
  x: 378,
  y: 50,
  w: 40,
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
  center_y: 140,
  radius: 50,
  start_angle: -145,
  end_angle: 145,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const topDialText = {
  x: 190,
  y: 90,
  w: 100,
  h: 100,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
  text: ''
};

export const topDialIcon = {
  x: 225,
  y: 170,
  src: 'widget/icon/wellness.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const leftDialArc = {
  ...topDialArc,
  center_x: 140,
  center_y: 240,
};

export const leftDialText = {
  ...topDialText,
  x: 90,
  y: 190,
};

export const leftDialIcon = {
  ...topDialIcon,
  x: 125,
  y: 270,
  src: 'widget/icon/running.png',
};

export const bottomDialArc = {
  ...topDialArc,
  center_x: 240,
  center_y: 340,
};

export const bottomDialText = {
  ...topDialText,
  x: 190,
  y: 290,
};

export const bottomDialIcon = {
  ...topDialIcon,
  x: 225,
  y: 370,
  src: 'widget/icon/sleep.png',
};

export const rightTopIcon = {
  ...topDialIcon,
  x: 310,
  y: 160,
  src: 'widget/icon/heart.png',
};

export const rightBottomIcon = {
  ...rightTopIcon,
  y: 280,
  src: 'widget/icon/steps.png',
};

export const rightTopText = {
  x: 340,
  y: 160,
  w: 80,
  h: 30,
  color: colors.secondary,
  text_size: fontSize.secondary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
  text: ''
};

export const rightBottomText = {
  ...rightTopText,
  y: 280,
};