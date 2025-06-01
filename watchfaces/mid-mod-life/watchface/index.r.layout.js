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
};

export const coverProps = {
  center_x: 240,
  center_y: 240,
  radius: 20,
  color: colors.braun,
};

export const screwProps = {
  center_x: 240,
  center_y: 240,
  radius: 5,
  color: colors.braun_dark,
};

export const dayText = {
  x: 314,
  y: 50,
  w: 70,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.secondary,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateText = {
  x: 384,
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
  line_width: 10,
  color: colors.aod,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const topDialLink = {
  x: 190,
  y: 90,
  w: 100,
  h: 100,
  // color: colors.red,
  type: hmUI.data_type.READINESS
};

export const topDialText = {
  x: 190,
  y: 90,
  w: 100,
  h: 100,
  color: colors.secondary,
  text_size: fontSize.primary,
  font: fontFamily.number,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
  text: ''
};

export const topDialTextImg = {
  x: 190,
  y: 124,
  w: 100,
  font_array: primaryFont,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
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

export const leftDialLink = {
  ...topDialLink,
  x: 90,
  y: 190,
  type: hmUI.data_type.PAI_WEEKLY
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

export const bottomDialLink = {
  ...topDialLink,
  x: 190,
  y: 290,
  type: hmUI.data_type.SLEEP
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
  y: 172,
  src: 'widget/icon/heart.png',
};

export const rightBottomIcon = {
  ...rightTopIcon,
  y: 278,
  src: 'widget/icon/steps.png',
};

export const rightTopText = {
  x: 340,
  y: 172,
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
  y: 278,
};

export const rightTopLink = {
  ...topDialLink,
  x: 305,
  y: 155,
  w: 120,
  h: 40,
  type: hmUI.data_type.HEART
};

export const rightBottomLink = {
  ...rightTopLink,
  y: 275,
  type: hmUI.data_type.STEP
};

export const batteryIcon = {
  x: 270,
  y: 225,
  src: '',
};