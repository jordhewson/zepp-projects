const { width, height } = hmSetting.getDeviceInfo();

export const SCREEN = {
  width,
  height,
  centerX: width / 2,
  centerY: height / 2,
};

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
    background: 0x000000,
    aod: 0x767578,
    outline: 0x4f4f4f,
};

export const fontFamily = {
    time: 'fonts/RedHatDisplay-Medium.ttf',
    number: 'fonts/Zepp-OS-Number.ttf',
    primary: 'fonts/RedHatDisplay-SemiBold.ttf',
};

export const fontSize = {
    time: px(84),
    primary: px(32),
    secondary: px(24),
};

export const timeArray = [
    'fonts/time/0.png',
    'fonts/time/1.png',
    'fonts/time/2.png',
    'fonts/time/3.png',
    'fonts/time/4.png',
    'fonts/time/5.png',
    'fonts/time/6.png',
    'fonts/time/7.png',
    'fonts/time/8.png',
    'fonts/time/9.png',
];

export const weekArray = [
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN',
];

export const batteryArray = [
    'icons/battery-1.png',
    'icons/battery-2.png',
    'icons/battery-3.png',
];
