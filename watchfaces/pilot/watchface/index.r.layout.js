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
  src: 'background/bg_green.png',
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
  // color: colors.aod,
  color: 0xDFD3C3
};

export const screwProps = {
  center_x: 240,
  center_y: 240,
  radius: 10,
  color: colors.background,
};

// Outside progress arcs
export const progressArc = {
  center_x: 240,
  center_y: 240,
  radius: 220,
  line_width: 10,
  color: colors.aod,
  show_level: hmUI.show_level.ONLY_NORMAL,
}

export const arc1Progress = {
  ...progressArc,
  start_angle: -60,
  end_angle: -10,
};

export const arc2Progress = {
  ...progressArc,
  start_angle: 30,
  end_angle: 80,
};

export const arc3Progress = {
  ...progressArc,
  start_angle: 120,
  end_angle: 170,
};

export const arc4Progress = {
  ...progressArc,
  start_angle: 210,
  end_angle: 260,
};

// Outside Icons
export const arc1Icon = {
  x: 30,
  y: 140,
  h: 30,
  w: 30,
  angle: -80,
  src: 'widget/icon/sun.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const arc2Icon = {
  x: 320,
  y: 30,
  h: 30,
  w: 30,
  angle: 10,
  src: 'widget/icon/sunrise.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const arc3Icon = {
  x: 435,
  y: 320,
  h: 30,
  w: 30,
  angle: 100,
  src: 'widget/icon/steps_small.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const arc4Icon = {
  x: 138,
  y: 430,
  h: 30,
  w: 30,
  angle: 10,
  src: 'widget/icon/heart_small.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

// Outside Stats
export const arcText = {
  color: colors.secondary,
  text_size: fontSize.small,
  font: fontFamily.bold,
  x: 0,
  y: 0,
  w: 480,
  h: 480,
  center_x: 240,
  center_y: 240,
  radius: 232,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const arc1Text = {
  ...arcText,
  start_angle: -100,
  end_angle: -70,
  mode: 0,
  align_h: hmUI.align.RIGHT,
};

export const arc2Text = {
  ...arcText,
  start_angle: -10,
  end_angle: 20,
  mode: 0,
  align_h: hmUI.align.RIGHT,
};

export const arc3Text = {
  ...arcText,
  start_angle: 80,
  end_angle: 110,
  mode: 0,
  align_h: hmUI.align.RIGHT,
};

export const arc4Text = {
  ...arcText,
  start_angle: 170,
  end_angle: 200,
  mode: 1,
  align_h: hmUI.align.LEFT,
};

// Outside arc links

export const arc3Link = {
  x: 190,
  y: 275,
  w: 100,
  h: 100,
  type: hmUI.data_type.STEP
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
  type: hmUI.data_type.BIO_CHARGE
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

export const rightDialArc = {
  ...topDialArc,
  center_x: 340,
  center_y: 240,
};

export const dayText = {
  x: 290,
  y: 200,
  w: 100,
  align_h: hmUI.align.CENTER_H,
  // align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.small,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateText = {
  x: 290,
  y: 225,
  w: 100,
  align_h: hmUI.align.CENTER_H,
  // align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.secondary,
  text: '0',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const monthText = {
  x: 290,
  y: 258,
  w: 100,
  align_h: hmUI.align.CENTER_H,
  // align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.secondary,
  text_size: fontSize.small,
  text: '0',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const rightDialLink = {
  ...topDialLink,
  x: 290,
  y: 190,
  type: hmUI.data_type.PAI_WEEKLY
};

export const rightTopIcon = {
  ...topDialIcon,
  x: 200,
  y: 450,
  src: 'widget/icon/heart_small.png',
};


export const rightTopText = {
  x: 340,
  y: 172,
  w: 80,
  h: 30,
  color: colors.secondary,
  text_size: fontSize.small,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
  text: ''
};


export const rightTopLink = {
  ...topDialLink,
  x: 305,
  y: 155,
  w: 120,
  h: 40,
  type: hmUI.data_type.HEART
};

export const batteryIcon = {
  x: 225,
  y: 415,
  src: '',
};