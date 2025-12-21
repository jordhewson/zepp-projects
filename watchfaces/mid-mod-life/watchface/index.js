import { colors, dayOfWeek } from '../utils/constants';
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
  rightTopIcon,
  rightBottomIcon,
  rightTopText,
  rightBottomText,
  topDialTextImg,
  coverProps,
  screwProps,
  batteryIcon,
  topDialLink,
  leftDialLink,
  bottomDialLink,
  rightTopLink,
  rightBottomLink,
} from './index.r.layout';

WatchFace({
  onInit() {
    console.log('index page.js on init invoke');
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildBackground();
    this.buildColorSelector();
    this.buildDate();
    this.buildDials();
    this.buildRightStats();
    this.buildBattery();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildColorSelector() {
    const types = [
      { type: 1, preview: 'colors/braun.png', title_sc: 'Yellow', title_tc: 'Yellow', title_en: 'Yellow' },
      { type: 2, preview: 'colors/orange.png', title_sc: 'Orange', title_tc: 'Orange', title_en: 'Orange' },
      { type: 3, preview: 'colors/red.png', title_sc: 'Red', title_tc: 'Red', title_en: 'Red' },
      { type: 4, preview: 'colors/blue.png', title_sc: 'Blue', title_tc: 'Blue', title_en: 'Blue' },
      { type: 5, preview: 'colors/green.png', title_sc: 'Green', title_tc: 'Green', title_en: 'Green' },
      { type: 6, preview: 'colors/purple.png', title_sc: 'Purple', title_tc: 'Purple', title_en: 'Purple' },
    ]
    editGroup = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
      edit_id: 101,
      x: 0,
      y: 0,
      w: 480,
      h: 480,
      select_image: 'colors/white.png',
      un_select_image: 'background/background.png',
      default_type: 1,
      optional_types: types,
      count: 6,
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
    // //70%msk
    // mask = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_FG_MASK, {
    //   x: 0,
    //   y: 0,
    //   w: 480,
    //   h: 480,
    //   src: 'colors/edit_bg.png',
    //   show_level: hmUI.show_level.ONLY_EDIT
    // })    
  },

  buildBackground() {
    hmUI.createWidget(hmUI.widget.IMG, bgProps);
  },

  buildDate() {
    const dayWidget = hmUI.createWidget(hmUI.widget.TEXT, dayText)
    const dateWidget = hmUI.createWidget(hmUI.widget.TEXT, dateText)
    let prevValue = null;

    const update = () => {
      const time = hmSensor.createSensor(hmSensor.id.TIME)
      const day = dayOfWeek[time.week - 1]
      const date = formatDateString(time.day)

      if (prevValue === date) {
        return;
      }
      console.log('date rendered')

      prevValue = date;
      dayWidget.setProperty(hmUI.prop.TEXT, day)
      dateWidget.setProperty(hmUI.prop.TEXT, date)
    }

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        console.log('ui resume');

        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          update();
        }
      },
    });
  },

  buildDials() {
    // Color Selection
    const editType = editGroup.getProperty(hmUI.prop.CURRENT_TYPE)
    console.log(`current type: ${editType}`)

    let color = colors.braun
    let color_dark = colors.braun_dark
    switch (editType) {
      case 1:
        color = colors.braun
        color_dark = colors.braun_dark
        break
      case 2:
        color = colors.orange
        color_dark = colors.orange_dark
        break
      case 3:
        color = colors.red
        color_dark = colors.red_dark
        break
      case 4:
        color = colors.blue
        color_dark = colors.blue_dark
        break
      case 5:
        color = colors.green
        color_dark = colors.green_dark
        break
      case 6:
        color = colors.purple
        color_dark = colors.purple_dark
        break
    }

    // Top Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      level: 100,
    })
    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
      ...topDialTextImg,
      type: hmUI.data_type.BIO_CHARGE
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      type: hmUI.data_type.BIO_CHARGE,
      color: color
    })
    hmUI.createWidget(hmUI.widget.IMG, topDialIcon);

    // Left Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      level: 100
    });
    const leftArcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      level: 0,
      color: color
    });
    const leftTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...leftDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, leftDialIcon);

    // Bottom Dial
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      level: 100,
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      type: hmUI.data_type.SLEEP,
      color: color_dark
    })
    const bottomArcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      level: 0,
      color: color
    })
    const bottomTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...bottomDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, bottomDialIcon);

    const update = () => {

      const pai = hmSensor.createSensor(hmSensor.id.PAI);
      const totalPai = pai.totalpai;
      console.log(`PAI: ${totalPai}`)
      const sleep = hmSensor.createSensor(hmSensor.id.SLEEP);
      const sleepScore = sleep.getBasicInfo().score;
      console.log(`Sleep Score: ${sleepScore}`)

      leftTextWidget.setProperty(hmUI.prop.MORE, { ...leftDialText, text: `${totalPai}` })
      pai.totalpai < 100 ?
        leftArcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, level: totalPai, color: color })
        : leftArcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, level: 100, color: color })

      bottomTextWidget.setProperty(hmUI.prop.MORE, { ...bottomDialText, text: `${sleepScore}` })
      sleepScore < 100 ?
        bottomArcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, level: sleepScore, color: color })
        : bottomArcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, level: 100, color: color })
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

  buildRightStats() {
    hmUI.createWidget(hmUI.widget.IMG, rightTopIcon);
    hmUI.createWidget(hmUI.widget.IMG, rightBottomIcon);

    const topText = hmUI.createWidget(hmUI.widget.TEXT, {
      ...rightTopText
    });
    const bottomText = hmUI.createWidget(hmUI.widget.TEXT, {
      ...rightBottomText
    });

    const update = () => {
      const heart = hmSensor.createSensor(hmSensor.id.HEART)
      const steps = hmSensor.createSensor(hmSensor.id.STEP)

      const heartRate = heart.last;
      const rounded = formatK(steps.current);


      console.log(`HR: ${heartRate}`);
      console.log(`Steps: ${rounded}`);

      prevHeart = heartRate;
      prevSteps = rounded;

      const stepText = `${rounded}`;

      topText.setProperty(hmUI.prop.MORE, { ...rightTopText, text: `${heartRate}` })
      bottomText.setProperty(hmUI.prop.MORE, { ...rightBottomText, text: stepText })
    }

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
      const { current } = hmSensor.createSensor(hmSensor.id.BATTERY);

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
    const editType = editGroup.getProperty(hmUI.prop.CURRENT_TYPE)
    console.log(`current type: ${editType}`)

    let color = colors.braun
    let color_dark = colors.braun_dark
    switch (editType) {
      case 1:
        color = colors.braun
        color_dark = colors.braun_dark
        break
      case 2:
        color = colors.orange
        color_dark = colors.orange_dark
        break
      case 3:
        color = colors.red
        color_dark = colors.red_dark
        break
      case 4:
        color = colors.blue
        color_dark = colors.blue_dark
        break
      case 5:
        color = colors.green
        color_dark = colors.green_dark
        break
      case 6:
        color = colors.purple
        color_dark = colors.purple_dark
        break
    }
    hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerProps);
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...coverProps,
      color: color
    });
    hmUI.createWidget(hmUI.widget.CIRCLE, {
      ...screwProps,
      color: color_dark
    });
  },

  buildLinks() { //STROKE_RECT
    hmUI.createWidget(hmUI.widget.IMG_CLICK, topDialLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, leftDialLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, bottomDialLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, rightTopLink),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, rightBottomLink)
  }
});
