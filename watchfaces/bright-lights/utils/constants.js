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
  'png_font/primary/9.png'
];

export const dateArray = [
  'date/date/0.png',
  'date/date/1.png',
  'date/date/2.png',
  'date/date/3.png',
  'date/date/4.png',
  'date/date/5.png',
  'date/date/6.png',
  'date/date/7.png',
  'date/date/8.png',
  'date/date/9.png',
];

export const weekArray = [
  'date/days/1.png',
  'date/days/2.png',
  'date/days/3.png',
  'date/days/4.png',
  'date/days/5.png',
  'date/days/6.png',
  'date/days/7.png',
];

export const colors = {
  primary: 0xffffff,
  secondary: 0xbdbdbd,
  grey: 0x828282,
  red: 0xeb5757,
  orange: 0xF2994A,
  yellow: 0xF2C94C,
  green: 0x27AE60,
  blue: 0x2F80ED,
  cyan: 0x56CCF2,
  purple: 0x9B51E0,
  navy: 0x00162C,
  background: 0x000000,
  aod: 0x767578,
  outline: 0x4f4f4f,
};

export const fontFamily = {
  regular: 'fonts/Roboto-Regular.ttf',
  bold: 'fonts/Roboto-Medium.ttf',
  number: 'fonts/Roboto-Medium.ttf'
};

export const fontSize = {
  primary: px(36),
  secondary: px(28),
  small: px(20)
};
