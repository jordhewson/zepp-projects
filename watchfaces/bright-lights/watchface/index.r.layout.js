import {
    SCREEN,
    colors,
    dateArray,
    fontFamily,
    fontSize,
    weekArray,
} from '../utils/constants';

export const bgProps = {
    x: 0,
    y: 0,
    src: 'background/bg2.png',
    show_level: hmUI.show_level.ONLY_NORMAL,
};

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

export const dayProps = {
    x: 290,
    y: 222,
    week_en: weekArray,
    week_tc: weekArray,
    week_sc: weekArray
};

export const dateProps = {
    day_startX: 368,
    day_startY: 223,
    day_align: hmUI.align.LEFT,
    day_space: 1, // Spacing of text.
    day_zero: 1, // Whether to make up zeroes.
    day_en_array: dateArray,
    day_sc_array: dateArray,
    day_tc_array: dateArray,

};

export const dialBgProps = {
    x: 167,
    y: 275,
    w: 145,
    h: 145,
    src: 'widget/widget_bg.png',
};

export const worldCityProps = {
    x: 167,
    y: 275,
    w: 145,
    h: 145,
    color: colors.aod,
    text_size: fontSize.small,
    font: fontFamily.regular,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: ''
};

export const dialPointerProps = {
    x: 167,
    y: 275,
    w: 145,
    h: 145,
    pos_x: 68.5,
    pos_y: 3,
    center_x: 72.5,
    center_y: 72.5,
    src: 'widget/widget_pointer_pm.png',
    angle: 0
};

export const wellnessArc1Props = {
    center_x: 90,
    center_y: 240,
    radius: 25,
    start_angle: -180,
    end_angle: 180,
    line_width: 4,
};

export const wellnessIcon1Props = {
    x: 90 - 12.5,
    y: 240 - 12.5,
    src: 'icons/readiness.png'
};

export const wellnessArc2Props = {
    center_x: 135,
    center_y: 195,
    radius: 25,
    start_angle: -180,
    end_angle: 180,
    line_width: 4,
};

export const wellnessIcon2Props = {
    x: 135 - 12.5,
    y: 195 - 12.5,
    src: 'icons/pai.png'
};

export const wellnessArc3Props = {
    center_x: 135,
    center_y: 285,
    radius: 25,
    start_angle: -180,
    end_angle: 180,
    line_width: 4,
};

export const wellnessIcon3Props = {
    x: 135 - 12.5,
    y: 285 - 12.5,
    src: 'icons/sleep.png'
};

export const updatesWeatherProps = {
    x: 0,
    y: 100,
    w: 480,
    h: 25,
    color: colors.secondary,
    text_size: fontSize.small,
    font: fontFamily.regular,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: ''
};

export const updatesHealthProps = {
    x: 0,
    y: 125,
    w: 480,
    h: 25,
    color: colors.secondary,
    text_size: fontSize.small,
    font: fontFamily.regular,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.NONE,
    text: ''
};