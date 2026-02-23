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
  // Defaults
  primary: 0xffffff,
  secondary: 0xbdbdbd,
  background: 0x000000,
  aod: 0x767578,
  outline: 0x333333,
  braun: 0xE4B301,
  braun_dark: 0x514000,

  // Forest / Moss / Verdant
  deep_moss: 0x333D29,
  clover_green: 0x656D4A,
  forest_shadow: 0x2D6A4F,
  mint_fern: 0x95D5B2,
  deep_ivy: 0x1B4332,
  lively_leaf: 0x52B788,
  eucalyptus: 0xB2BEB5,
  sage: 0x8A9A5B,
  dark_evergreen: 0x283D3B,

  // Blues / Deep Sea / Pacific
  midnight_ocean: 0x223F58,
  sky_blue: 0xA5D6E7,
  steel_blue: 0x4682B4,
  pacific_blue: 0x00B4D8,
  abyssal_navy: 0x03045E,
  ocean_blue: 0x0077B6,
  ice_blue: 0x90E0EF,
  prussian_blue: 0x003049,
  air_force_blue: 0x669BBC,
  petrol_teal: 0x197278,

  // Reds / Flare / Earthy Reds
  flare_red: 0xE5383B,
  blood_moon: 0x660708,
  terracotta: 0xE2725B,
  burnt_sienna: 0x772E25,
  crimson_clay: 0xC44536,
  faded_rose: 0x966969,
  oxide_red: 0x8A3324,

  // Golds / Golden Hour / Warmth
  burnt_oak: 0x493628,
  amber_honey: 0xFFB627,
  dark_tobacco: 0x261C02,
  goldenrod: 0xDAA520,
  champagne: 0xF1E5AC,
  ochre: 0xCC7722,

  // Browns / Neutrals / Sand
  dark_espresso: 0x3D2D29,
  parchment: 0xDFD3C3,
  roast_coffee: 0x50322B,
  dark_cacao: 0x483232,

  // Purples / Twilight
  night_plum: 0x352A3C,
  thistle: 0xD8BFD8,
  muted_violet: 0x70587E,

  // Grayscale / Technical
  slate_gray: 0x666666,
  charcoal: 0x333333,
  graphite: 0x3D3D3D
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