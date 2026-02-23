import { colors, dayOfWeek, months } from '../utils/constants';
import { formatDateString, formatK } from '../utils/format_num';

import {
  bgProps,
  pointerProps,
  dayText,
  dateText,
  topDialArc,
  topDialIcon,
  leftDialArc,
  leftDialIcon,
  bottomDialArc,
  bottomDialIcon,
  leftDialText,
  bottomDialText,
  topDialTextImg,
  coverProps,
  screwProps,
  batteryIcon,
  topDialLink,
  leftDialLink,
  bottomDialLink,
  monthText,
  arc1Progress,
  arc2Progress,
  arc3Progress,
  arc4Progress,
  arc3Icon,
  arc3Text,
  rightDialArc,
  arc4Icon,
  arc4Text,
  arc2Text,
  arc2Icon,
  arc1Icon,
  arc1Text,
  aodBgProps,
  aodPointerProps,
  aodCoverProps,
} from './index.r.layout';

let editGroup = null;
let maskCover = null;
let prevHeart = 0;
let prevSteps = 0;

// Helper to get colors based on edit type
function getThemeColors(type) {
  const themeMap = {
    1: {
      background: 'background/bg_bush.png',
      primary: colors.clover_green,
      primary_dark: colors.deep_moss,
      secondary: colors.clover_green,
      secondary_dark: colors.deep_moss,
    },
    2: {
      background: 'background/bg_pacific.png',
      primary: colors.steel_blue,
      primary_dark: colors.midnight_ocean,
      secondary: colors.sky_blue,
      secondary_dark: colors.midnight_ocean,
    },
    3: {
      background: 'background/bg_flare.png',
      primary: colors.flare_red,
      primary_dark: colors.blood_moon,
      secondary: colors.slate_gray,
      secondary_dark: colors.charcoal,
    },
    4: {
      background: 'background/bg_golden_hour.png',
      primary: colors.goldenrod,
      primary_dark: colors.dark_tobacco,
      secondary: colors.amber_honey,
      secondary_dark: colors.burnt_oak,
    },
    5: {
      background: 'background/bg_poppy.png',
      primary: colors.terracotta,
      primary_dark: colors.dark_espresso,
      secondary: colors.parchment,
      secondary_dark: colors.dark_espresso,
    },
    6: {
      background: 'background/bg_verdant.png',
      primary: colors.lively_leaf,
      primary_dark: colors.deep_ivy,
      secondary: colors.mint_fern,
      secondary_dark: colors.forest_shadow,
    },
    7: {
      background: 'background/bg_deep_sea.png',
      primary: colors.ice_blue,
      primary_dark: colors.ocean_blue,
      secondary: colors.pacific_blue,
      secondary_dark: colors.abyssal_navy,
    },
    8: {
      background: 'background/bg_sea_glass.png',
      primary: colors.sage,
      primary_dark: colors.graphite,
      secondary: colors.eucalyptus,
      secondary_dark: colors.graphite,
    },
    9: {
      background: 'background/bg_twilight.png',
      primary: colors.muted_violet,
      primary_dark: colors.night_plum,
      secondary: colors.thistle,
      secondary_dark: colors.night_plum,
    },
    10: {
      background: 'background/bg_afterglow.png',
      primary: colors.champagne,
      primary_dark: colors.roast_coffee,
      secondary: colors.goldenrod,
      secondary_dark: colors.roast_coffee,
    },
    11: {
      background: 'background/bg_scuba.png',
      primary: colors.air_force_blue,
      primary_dark: colors.prussian_blue,
      secondary: colors.air_force_blue,
      secondary_dark: colors.prussian_blue,
    },
    12: {
      background: 'background/bg_submarine.png',
      primary: colors.crimson_clay,
      primary_dark: colors.burnt_sienna,
      secondary: colors.petrol_teal,
      secondary_dark: colors.dark_evergreen,
    },
    13: {
      background: 'background/bg_terracotta.png',
      primary: colors.faded_rose,
      primary_dark: colors.dark_cacao,
      secondary: colors.faded_rose,
      secondary_dark: colors.dark_cacao,
    },
    14: {
      background: 'background/bg_dusk.png',
      primary: colors.ochre,
      primary_dark: colors.graphite,
      secondary: colors.oxide_red,
      secondary_dark: colors.graphite,
    },
  };
  return themeMap[type] || {
    background: 'background/bg_bush.png',
    primary: colors.clover_green,
    primary_dark: colors.deep_moss,
    secondary: colors.clover_green,
    secondary_dark: colors.deep_moss,
  };
}

function getTimeInMins(time) {
  const mins = (time.hour * 60) + time.minute;
  return mins || 0;
}

WatchFace({
  onInit() {
    console.log('index page.js on init invoke');
    this.timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    this.paiSensor = hmSensor.createSensor(hmSensor.id.PAI);
    this.sleepSensor = hmSensor.createSensor(hmSensor.id.SLEEP);
    this.heartSensor = hmSensor.createSensor(hmSensor.id.HEART);
    this.stepSensor = hmSensor.createSensor(hmSensor.id.STEP);
    this.weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);
    this.batterySensor = hmSensor.createSensor(hmSensor.id.BATTERY);
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildColorSelector();
    this.buildBackground();
    this.buildDials();
    this.buildBattery();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildColorSelector() {
    const types = [
      { type: 1, preview: 'colors/bush.png', title_sc: '灌木', title_tc: '灌木', title_en: 'Bush' },
      { type: 2, preview: 'colors/pacific.png', title_sc: '太平洋', title_tc: '太平洋', title_en: 'Pacific' },
      { type: 3, preview: 'colors/flare.png', title_sc: '闪耀', title_tc: '闪耀', title_en: 'Flare' },
      { type: 4, preview: 'colors/golden_hour.png', title_sc: '黄金时刻', title_tc: '黃金時刻', title_en: 'Golden Hour' },
      { type: 5, preview: 'colors/poppy.png', title_sc: '罂粟', title_tc: '罌粟', title_en: 'Poppy' },
      { type: 6, preview: 'colors/verdant.png', title_sc: '青葱', title_tc: '青蔥', title_en: 'Verdant' },
      { type: 7, preview: 'colors/deep_sea.png', title_sc: '深海', title_tc: '深海', title_en: 'Deep Sea' },
      { type: 8, preview: 'colors/sea_glass.png', title_sc: '海玻璃', title_tc: '海玻璃', title_en: 'Sea Glass' },
      { type: 9, preview: 'colors/twilight.png', title_sc: '暮色', title_tc: '暮色', title_en: 'Twilight' },
      { type: 10, preview: 'colors/afterglow.png', title_sc: '晚霞', title_tc: '晚霞', title_en: 'Afterglow' },
      { type: 11, preview: 'colors/scuba.png', title_sc: '水肺', title_tc: '水肺', title_en: 'Scuba' },
      { type: 12, preview: 'colors/submarine.png', title_sc: '潜艇', title_tc: '潛艇', title_en: 'Submarine' },
      { type: 13, preview: 'colors/terracotta.png', title_sc: '陶土', title_tc: '陶土', title_en: 'Terracotta' },
      { type: 14, preview: 'colors/dusk.png', title_sc: '黄昏', title_tc: '黃昏', title_en: 'Dusk' }
    ]
    editGroup = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
      edit_id: 101,
      x: 0,
      y: 0,
      w: 480,
      h: 480,
      select_image: 'colors/select.png',
      un_select_image: 'colors/unselect.png',
      default_type: 1,
      optional_types: types,
      count: types.length,
      tips_BG: 'colors/color_tip.png',
      tips_x: 170,
      tips_y: 425,
      tips_width: 139,
    })
    //100%mask
    maskCover = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_MASK, {
      x: 0,
      y: 0,
      w: 480,
      h: 480,
      src: 'colors/edit_bg.png',
      show_level: hmUI.show_level.ONLY_EDIT
    })
  },

  buildBackground() {
    const editType = editGroup.getProperty(hmUI.prop.CURRENT_TYPE)
    const {
      background: bg,
      primary: primary,
      primary_dark: primary_dark,
      secondary: secondary,
      secondary_dark: secondary_dark
    } = getThemeColors(editType)
    hmUI.createWidget(hmUI.widget.IMG, {
      ...bgProps,
      src: bg
    });
    hmUI.createWidget(hmUI.widget.IMG, aodBgProps);
  },

  buildDials() {
    // Color Selection
    // Get the current color selection
    const editType = editGroup.getProperty(hmUI.prop.CURRENT_TYPE)
    console.log(`current color theme: ${editType}`)

    // Define current colors
    const {
      background: bg,
      primary: primary,
      primary_dark: primary_dark,
      secondary: secondary,
      secondary_dark: secondary_dark
    } = getThemeColors(editType)

    // Arc 1
    hmUI.createWidget(hmUI.widget.IMG, arc1Icon);
    const arc1Stats = hmUI.createWidget(hmUI.widget.TEXT, {
      ...arc1Text,
      text: `14`
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc1Progress,
      level: 100,
      color: secondary_dark,
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc1Progress,
      type: hmUI.data_type.WEATHER_CURRENT,
      color: secondary,
    });

    // Arc 2
    const sunIcon = hmUI.createWidget(hmUI.widget.IMG, arc2Icon);
    const arc2Stats = hmUI.createWidget(hmUI.widget.TEXT, {
      ...arc2Text,
      text: '16:24'
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc2Progress,
      level: 100,
      color: secondary_dark
    });
    const arc2 = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc2Progress,
      level: 0,
      color: secondary,
    });

    // Arc 3
    hmUI.createWidget(hmUI.widget.IMG, arc3Icon);
    const arc3Stats = hmUI.createWidget(hmUI.widget.TEXT, {
      ...arc3Text
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc3Progress,
      level: 100,
      color: secondary_dark
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc3Progress,
      type: hmUI.data_type.STEP,
      color: secondary,
    });

    // Arc 4
    hmUI.createWidget(hmUI.widget.IMG, arc4Icon);
    const arc4Stats = hmUI.createWidget(hmUI.widget.TEXT, {
      ...arc4Text
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc4Progress,
      level: 100,
      color: secondary_dark,
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc4Progress,
      type: hmUI.data_type.HEART,
      color: secondary,
    });

    // Top Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      level: 100,
      color: primary_dark
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      ...topDialTextImg,
      type: hmUI.data_type.BIO_CHARGE
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      type: hmUI.data_type.BIO_CHARGE,
      color: primary
    })
    hmUI.createWidget(hmUI.widget.IMG, topDialIcon);

    // Left Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      level: 100,
      color: primary_dark
    });
    const leftArcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      level: 0,
      color: primary,
    });
    const leftTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...leftDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, leftDialIcon);

    // Bottom Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      level: 100,
      color: primary_dark
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      type: hmUI.data_type.SLEEP,
      color: primary
    })
    const bottomArcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      level: 0,
      color: primary
    })
    const bottomTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...bottomDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, bottomDialIcon);

    // Right Dial
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...rightDialArc,
      // level: 100,
      color: primary_dark
    })
    const dayWidget = hmUI.createWidget(hmUI.widget.TEXT, dayText)
    const dateWidget = hmUI.createWidget(hmUI.widget.TEXT, dateText)
    const monthWidget = hmUI.createWidget(hmUI.widget.TEXT, monthText)

    const update = () => {

      const time = this.timeSensor
      const day = dayOfWeek[time.week - 1]
      const date = formatDateString(time.day)
      const month = time.month
      const pai = this.paiSensor
      const totalPai = pai.totalpai
      console.log(`PAI: ${totalPai}`)
      const sleep = this.sleepSensor
      const sleepScore = sleep.getBasicInfo().score
      console.log(`Sleep Score: ${sleepScore}`)
      const heart = this.heartSensor
      const steps = this.stepSensor
      const heartRate = heart.last;
      const rounded = formatK(steps.current)
      const weather = this.weatherSensor.getForecastWeather()
      const maxTemp = weather.forecastData.data[0].high
      const minTemp = weather.forecastData.data[0].low
      const sunrise = weather.tideData.data[0].sunrise
      const sunset = weather.tideData.data[0].sunset
      const sunriseTomorrow = weather.tideData.data[1].sunrise

      const weatherText = `${maxTemp}°`
      const tomorrowBool = getTimeInMins(time) > getTimeInMins(sunset);
      const sunriseBool = getTimeInMins(time) < getTimeInMins(sunrise);
      const sunText =
        tomorrowBool ?
          `${sunriseTomorrow.hour}:${sunriseTomorrow.minute}` :
          sunriseBool ?
            `${sunrise.hour}:${sunrise.minute}` :
            `${sunset.hour}:${sunset.minute}`;
      const sunIconStatus =
        tomorrowBool || sunriseBool ?
          'widget/icon/sunrise.png' :
          'widget/icon/sunset.png';
      const totalDay = (getTimeInMins(sunset) - getTimeInMins(sunrise));
      const elapsedDay = (getTimeInMins(sunset) - getTimeInMins(time));
      const sunRemaining = Math.round(elapsedDay / totalDay * 100);
      const totalNight =
        (getTimeInMins(sunriseTomorrow) + (24 * 60) - getTimeInMins(sunset));
      const elapsedNight =
        time.hour < sunset.hour ?
          (getTimeInMins(time) + (24 * 60) - getTimeInMins(sunset)) :
          (getTimeInMins(time) - getTimeInMins(sunset));
      const nightProgress = Math.round(elapsedNight / totalNight * 100);
      const sunLevel =
        tomorrowBool || sunriseBool ?
          nightProgress :
          sunRemaining;
      const stepText = `${rounded}`;
      const heartText = `${heartRate}`;

      console.log(`Sun remaining: ${sunRemaining}, night progress: ${nightProgress}, sun level: ${sunLevel}`)

      sunIcon.setProperty(hmUI.prop.MORE, {
        ...arc2Icon,
        src: sunIconStatus
      })

      arc2.setProperty(hmUI.prop.MORE, { ...arc2Progress, color: secondary, level: sunLevel })

      arc1Stats.setProperty(hmUI.prop.MORE, { ...arc1Text, text: weatherText })
      arc2Stats.setProperty(hmUI.prop.MORE, { ...arc2Text, text: sunText })
      arc3Stats.setProperty(hmUI.prop.MORE, { ...arc3Text, text: stepText })
      arc4Stats.setProperty(hmUI.prop.MORE, { ...arc4Text, text: heartText })

      dayWidget.setProperty(hmUI.prop.TEXT, day)
      dateWidget.setProperty(hmUI.prop.TEXT, date)
      monthWidget.setProperty(hmUI.prop.TEXT, months[month - 1])

      leftTextWidget.setProperty(hmUI.prop.MORE, { ...leftDialText, text: `${totalPai}` })
      pai.totalpai < 100 ?
        leftArcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, level: totalPai, color: primary })
        : leftArcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, level: 100, color: primary })

      bottomTextWidget.setProperty(hmUI.prop.MORE, { ...bottomDialText, text: `${sleepScore}` })
      sleepScore < 100 ?
        bottomArcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, level: sleepScore, color: primary })
        : bottomArcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, level: 100, color: primary })
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        console.log('ui resume');

        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          update();
        }
      },
    });
  },

  buildBattery() {
    const batteryWidget = hmUI.createWidget(hmUI.widget.IMG, batteryIcon)
    let prevValue = null;

    const update = () => {
      const { current } = this.batterySensor

      if (prevValue === current) {
        return;
      }

      console.log('battery rerendered');

      prevValue = current;

      const img = current > 30 ? '' : 'widget/icon/battery.png';

      batteryWidget.setProperty(hmUI.prop.MORE, {
        ...batteryIcon,
        src: img,
      });
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        console.log('ui resume');

        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          update();
        }
      },
    });
  },

  buildPointers() {
    // Color Selection
    // Get the current color selection
    const editType = editGroup.getProperty(hmUI.prop.CURRENT_TYPE)
    console.log(`current color theme: ${editType}`)

    // Define current colors
    const {
      background: bg,
      primary: primary,
      primary_dark: primary_dark,
      secondary: secondary,
      secondary_dark: secondary_dark
    } = getThemeColors(editType)

    hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerProps);
    hmUI.createWidget(hmUI.widget.TIME_POINTER, aodPointerProps);
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...coverProps,
      // color: primary
    });
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...aodCoverProps,
      // color: primary
    });
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...screwProps,
      // color: primary_dark
    });
  },

  buildLinks() { //STROKE_RECT
    hmUI.createWidget(hmUI.widget.IMG_CLICK, topDialLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, leftDialLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, bottomDialLink)
  }
});
