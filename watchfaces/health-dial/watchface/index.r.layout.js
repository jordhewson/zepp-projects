import {
  SCREEN,
  colors,
  fontFamily,
  fontSize,
  primaryFont,
} from '../utils/constants';

export const BG_IMAGE_PROPS = {
  x: 0,
  y: 0,
  src: 'background/bg1.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const bgConfig = [
  { id: 1, preview: 'background/bg1.png', path: 'background/bg1.png' },
  { id: 2, preview: 'background/bg2.png', path: 'background/bg2.png' }
];

export const DAY_TEXT = {
  x: 208,
  y: -130,
  w: 64,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.bold,
  color: colors.red,
  text_size: fontSize.secondary,
  text: '   ',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const DATE_TEXT = {
  x: 208,
  y: -100,
  w: 64,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.regular,
  color: colors.secondary,
  text_size: fontSize.primary,
  text: '0',
  show_level: hmUI.show_level.ONLY_NORMAL,
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