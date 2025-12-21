const { width, height } = hmSetting.getDeviceInfo();

export const SCREEN = {
  width,
  height,
  centerX: width / 2,
  centerY: height / 2,
};

  export const DATE = {
    x: px(224),
    y: px(286),
    width: px(200),
    height: px(25),
    weekDays: 
      ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  };

export const dayOfWeek = [
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
  'SUN'
];

export const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
];

export const colors = {
  primary: 0xffffff,
  secondary: 0xbdbdbd,
  grey: 0x828282,
  red: 0xad2e24,
  red_dark: 0x540804,
  orange: 0xF2994A,
  orange_dark: 0x5F3007,
  yellow: 0xF2C94C,
  green: 0x52796f,
  green_dark: 0x354f52,
  blue: 0x457b9d,
  blue_dark: 0x1d3557,
  cyan: 0x56CCF2,
  cyan_dark: 0x095872,
  purple: 0x7678ed,
  purple_dark: 0x3d348b,
  navy: 0x00162C,
  navy_dark: 0x1A237E,
  background: 0x000000,
  aod: 0x767578,
  outline: 0x333333,
  braun: 0xE4B301,
  braun_dark: 0x514000,
};

export const fontFamily = {
  regular: 'fonts/Inter-Regular.ttf',
  bold: 'fonts/Inter-Bold.ttf',
  number: 'fonts/Inter-Regular.ttf',
  cursive: 'fonts/Pacifico-Regular.ttf'
};

export const fontSize = {
  primary: px(36), //36
  secondary: px(28), //28
  small: px(22), //18
};

export const primaryFont = [
  'png_font/primary/0.png',
  'png_font/primary/1.png',
  'png_font/primary/2.png',
  'png_font/primary/3.png',
  'png_font/primary/4.png',
  'png_font/primary/5.png',
  'png_font/primary/6.png',
  'png_font/primary/7.png',
  'png_font/primary/8.png',
  'png_font/primary/9.png',
];