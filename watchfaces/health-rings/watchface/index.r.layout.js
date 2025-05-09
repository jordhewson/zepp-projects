import { batteryArray, colors, fontFamily, fontSize, SCREEN, timeArray } from "../utils/constants";

export const timeLayout = {
  hour_startX: SCREEN.centerX - 126,
  hour_startY: SCREEN.centerY - 57,
  hour_zero: true,
  hour_space: 0,
  hour_align: hmUI.align.RIGHT,
  hour_array: timeArray,

  minute_follow: false,
  minute_startX: SCREEN.centerX + 8,
  minute_startY: SCREEN.centerY - 57,
  minute_zero: true,
  minute_space: 0,
  minute_align: hmUI.align.LEFT,
  minute_array: timeArray,

  am_x: SCREEN.centerX + 120,
  am_y: SCREEN.centerY - 57,

  am_sc_path: 'fonts/time/AM.png',
  am_en_path: 'fonts/time/AM.png',
  pm_sc_path: 'fonts/time/PM.png',
  pm_en_path: 'fonts/time/PM.png',

  pm_x: SCREEN.centerX +120,
  pm_y: SCREEN.centerY - 57,
};

export const colonLayout = {
  x: SCREEN.centerX - 28.5,
  y: SCREEN.centerY - 55,
  src: 'fonts/time/colon.png',
};

export const dayLayout = {
  x: 0,
  y: 70,
  w: SCREEN.width,
  color: colors.secondary,
  text_size: fontSize.secondary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  font: fontFamily.primary,
  text_style: hmUI.text_style.ELLIPSIS,
  text: '###',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const dateLayout = {
  x: 0,
  y: 100,
  w: SCREEN.width,
  color: colors.secondary,
  text_size: fontSize.secondary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  font: fontFamily.primary,
  text_style: hmUI.text_style.ELLIPSIS,
  text: '###',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const ring1Layout = {
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  radius: SCREEN.centerX - 16,
  start_angle: -180,
  end_angle: 180,
  color: colors.orange,
  line_width: 15,
  level: 0,
};

export const ring1Text = {
  x: SCREEN.centerX / 1.5 + 24,
  y: 280,
  w: SCREEN.centerX,
  h: 32,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text_size: fontSize.primary,
  text_style: hmUI.text_style.ELLIPSIS,
  color: colors.orange,
  text: '0',
};

export const ring1Icon = {
  x: SCREEN.centerX / 1.5 - 24,
  y: 280,
  src: 'icons/steps.png'
};

export const ring2Layout = {
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  radius: SCREEN.centerX - 38,
  start_angle: -180,
  end_angle: 180,
  color: colors.red,
  line_width: 15,
  level: 0
};

export const ring2Text = {
  x: SCREEN.width / 3 + 24,
  y: 320,
  w: SCREEN.centerX,
  h: 32,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text_size: fontSize.primary,
  text_style: hmUI.text_style.ELLIPSIS,
  color: colors.red,
  text: '',
};

export const ring2Icon = {
  x: SCREEN.width / 3 - 24,
  y: 320,
  src: 'icons/calorie.png'
};

export const ring3Layout = {
  center_x: SCREEN.centerX,
  center_y: SCREEN.centerY,
  radius: SCREEN.centerX - 60,
  start_angle: -180,
  end_angle: 180,
  color: colors.cyan,
  line_width: 15,
  level: 100,
};

export const ring3Text = {
  x: SCREEN.centerX,
  y: 360,
  w: SCREEN.centerX,
  h: 32,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  font: fontFamily.number,
  text_size: fontSize.primary,
  text_style: hmUI.text_style.ELLIPSIS,
  color: colors.cyan,
  text: '',
};

export const ring3Icon = {
  x: SCREEN.centerX - 48,
  y: 360,
  src: 'icons/stand.png'
};

export const smallWidget1Icon = {
  x: 120,
  y: 150,
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const smallWidget1Text = {
  x: SCREEN.centerX - 100,
  y: 145,
  w: 80,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  font: fontFamily.number,
  text_style: hmUI.text_style.ELLIPSIS,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const smallWidget2Icon = {
  x: 270,
  y: 150,
  src: 'icons/heart_rate.png',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const smallWidget2Text = {
  x: SCREEN.centerX + 48,
  y: 145,
  w: 80,
  color: colors.secondary,
  text_size: fontSize.primary,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.TOP,
  font: fontFamily.number,
  text_style: hmUI.text_style.ELLIPSIS,
  text: '000',
  show_level: hmUI.show_level.ONLY_NORMAL,
};

export const batteryStatus = {
  x: SCREEN.width / 3 * 2,
  y: 300,
  w: 16,
  h: 24,
};

export const batteryArc = {
  center_x: SCREEN.width / 3 * 2 + 8,
  center_y: 312,
  radius: 24,
  start_angle: 0,
  end_angle: -360,
  line_width: 5,
};