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
  src: 'background/bg0.png',
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
  x: 261,
  y: 30,
  w: 90,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.orange,
  text_size: fontSize.secondary,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateText = {
  x: 261,
  y: 60,
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
  radius: 210,
  start_angle: -60,
  end_angle: -5,
  line_width: 10
};

export const icon1 = {
  x: 30,
  y: 150,
  angle: 0
};

export const arc2 = {
  ...arc1,
  start_angle: 30,
  end_angle: 85,
};

export const icon2 = {
  x: 300,
  y: 30,
  angle: 0
};

export const arc3 = {
  ...arc1,
  start_angle: 120,
  end_angle: 175,
};

export const icon3 = {
  x: 420,
  y: 300,
  angle: 0
};

export const arc4 = {
  ...arc1,
  start_angle: 210,
  end_angle: 265,
};

export const icon4 = {
  x: 150,
  y: 420,
  angle: 0
};

export const DATE_TEXT_PROPS = {
  x: 190,
  y: -100,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '00',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_L_DATA_PROPS = {
  x: 90,
  y: -80,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_L_ICON = {
  x: 132,
  y: 130,
  src: 'widget/icon/steps.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_L_TEXT = {
  x: 90,
  y: -50,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.regular,
  color: colors.secondary,
  text_size: fontSize.small,
  text: 'STEPS',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_C_ARC_L = {
  center_x: 240,
  center_y: 240,
  radius: 25,
  start_angle: 0,
  end_angle: -180,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_C_ARC_R = {
  center_x: 240,
  center_y: 240,
  radius: 25,
  start_angle: 0,
  end_angle: 180,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_R_DATA_PROPS = {
  x: 290,
  y: -80,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_R_ICON = {
  x: 328,
  y: 130,
  src: 'widget/icon/heart rate.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const S_WIDGET_R_TEXT = {
  x: 290,
  y: -50,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.regular,
  color: colors.secondary,
  text_size: fontSize.small,
  text: 'HR',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_L_BACKGROUND = {
  x: 62,
  y: 190,
  src: 'widget/bg/bg_green.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_L_ARC = {
  center_x: 112,
  center_y: 240,
  radius: 50,
  start_angle: -145,
  end_angle: 145,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_L_TEXT = {
  x: 60,
  y: 48,
  width: 57,
  height: 38,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_L_ICON = {
  x: 100,
  y: 270,
  src: 'widget/icon/sport.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_C_BACKGROUND = {
  x: 190,
  y: 305,
  src: 'widget/bg/bg_blue.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_C_ARC = {
  center_x: 240,
  center_y: 350,
  radius: 50,
  start_angle: -145,
  end_angle: 145,
  line_width: 5,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

const readinessArcArray = [''];
for (let i = 0; i < 100; i++) {
  if (i < 70) {
    readinessArcArray.push('widget/bg/bg_orange.png');
  } else if (i < 85) {
    readinessArcArray.push('widget/bg/bg_blue.png');
  } else {
    readinessArcArray.push('widget/bg/bg_green.png');
  }
}

export const WIDGET_C_IMG_PROPS = {
  x: 189,
  y: 300,
  w: 100,
  h: 100,
  image_array: readinessArcArray,
  image_length: readinessArcArray.length,
  type: hmUI.data_type.READINESS,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_C_TEXT = {
  x: 190,
  y: 162,
  width: 57,
  height: 38,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_C_TEXT_IMG = {
  x: 205,
  y: 340,
  w: 69,
  h: 42,
  font_array: primaryFont,
  type: hmUI.data_type.READINESS,
  align_h: hmUI.align.CENTER_H,
  h_space: 2,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_C_ICON = {
  x: 225,
  y: 385,
  src: 'widget/icon/lotus.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_R_BACKGROUND = {
  center_x: 370,
  center_y: 240,
  radius: 50,
  start_angle: -145,
  end_angle: 145,
  line_width: 5,
  color: colors.outline,
  level: 100,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_R_ARC = {
  center_x: 370,
  center_y: 240,
  radius: 50,
  start_angle: -145,
  end_angle: 145,
  line_width: 5,
  color: colors.purple,
  type: hmUI.data_type.SLEEP,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_R_TEXT = {
  x: 320,
  y: 48,
  width: 57,
  height: 38,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const WIDGET_R_ICON = {
  x: 355,
  y: 270,
  src: 'widget/icon/sleep.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const DISCONNECT_PROPS = {
  x: px(130),
  y: px(226),
  type: hmUI.system_status.DISCONNECT,
  src: 'disconnect/disconnect.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const HOUR_POINTER_PROPS = {
  hour_centerX: SCREEN.centerX,
  hour_centerY: SCREEN.centerY,
  hour_posX: SCREEN.centerX,
  hour_posY: SCREEN.centerY,
  hour_path: 'pointers/hour.png',
  show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
};

export const MINUTE_POINTER_PROPS = {
  minute_centerX: SCREEN.centerX,
  minute_centerY: SCREEN.centerY,
  minute_posX: SCREEN.centerX,
  minute_posY: SCREEN.centerY,
  minute_path: 'pointers/minute.png',
  minute_cover_path: 'pointers/cover.png',
  minute_cover_x: 0,
  minute_cover_y: 0,
  show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONAL_AOD,
};

export const pointerConfig = [
  {
    id: 1,
    hour: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/hour1.png'
    },
    minute: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/minute1.png',
    },
    preview: 'pointers/preview1.png'
  },
  {
    id: 2,
    hour: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/hour2.png'
    },
    minute: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/minute2.png',
    },
    preview: 'pointers/preview2.png'
  },
  {
    id: 3,
    hour: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/hour3.png'
    },
    minute: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/minute3.png',
    },
    preview: 'pointers/preview3.png'
  },
  {
    id: 4,
    hour: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/hour4.png'
    },
    minute: {
      centerX: SCREEN.centerX,
      centerY: SCREEN.centerY,
      posX: SCREEN.centerX,
      posY: SCREEN.centerY,
      path: 'pointers/minute4.png',
    },
    preview: 'pointers/preview4.png'
  },
]