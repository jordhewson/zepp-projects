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
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const colors = {
  primary: 0xffffff,
  secondary: 0xbdbdbd,
  grey: 0x828282,
  red: 0xeb5757,
  orange: 0xF2994A,
  orange_dark: 0x5F3007,
  yellow: 0xF2C94C,
  green: 0x27AE60,
  blue: 0x2F80ED,
  blue_dark: 0x0D4896,
  cyan: 0x56CCF2,
  cyan_dark: 0x095872,
  purple: 0x9B51E0,
  purple_dark: 0x54188B,
  navy: 0x00162C,
  background: 0x000000,
  aod: 0x767578,
  outline: 0x4f4f4f,
};

export const fontFamily = {
  regular: 'fonts/Jost-Regular.ttf',
  bold: 'fonts/Jost-Bold.ttf',
  number: 'fonts/Jost-Medium.ttf',
  cursive: 'fonts/Pacifico-Regular.ttf'
};

export const fontSize = {
  primary: px(28), //36
  secondary: px(22), //28
  small: px(18), //18
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