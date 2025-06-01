import { colors, dayOfWeek, months } from '../utils/constants';
import { formatK } from '../utils/format_num';

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
  topDialText,
  leftDialText,
  bottomDialText,
  rightTopIcon,
  rightBottomIcon,
  rightTopText,
  rightBottomText,
} from './index.r.layout';

WatchFace({
  onInit() {
    console.log('index page.js on init invoke');
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildBackground();
    this.buildDate();
    this.buildTopDial();
    this.buildLeftDial();
    this.buildBottomDial();
    this.buildRightStats();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
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
      const date = time.day.toString()

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

  buildTopDial() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      color: colors.aod,
      level: 100,
    })
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...topDialText,
      type: hmUI.data_type.READINESS
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      color: colors.orange,
      type: hmUI.data_type.READINESS,
    })
    hmUI.createWidget(hmUI.widget.IMG, topDialIcon);
  },

  buildLeftDial() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      color: colors.aod,
      level: 100
    });
    const arcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...leftDialArc,
      color: colors.orange,
      level: 0,
    });
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...leftDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, leftDialIcon);

    const update = () => {
      const pai = hmSensor.createSensor(hmSensor.id.PAI);
      const totalPai = pai.totalpai;
      console.log(`PAI: ${totalPai}`)
      textWidget.setProperty(hmUI.prop.MORE, { ...leftDialText, text: `${totalPai}` })
      pai.totalpai < 100 ?
        arcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, color: colors.orange, level: totalPai })
        : arcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, color: colors.orange, level: 100 })
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

  buildBottomDial() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      color: colors.aod,
      level: 100,
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      color: colors.orange_dark,
      type: hmUI.data_type.SLEEP,
    })
    const arcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      color: colors.orange,
      // type: hmUI.data_type.SLEEP,
      level: 100,
    })
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
      ...bottomDialText,
    })
    hmUI.createWidget(hmUI.widget.IMG, bottomDialIcon);

    const update = () => {
      const sleep = hmSensor.createSensor(hmSensor.id.SLEEP);
      const sleepScore = sleep.getBasicInfo().score;
      console.log(`Sleep Score: ${sleepScore}`)
      textWidget.setProperty(hmUI.prop.MORE, { ...bottomDialText, text: `${sleepScore}` })
      sleepScore < 100 ?
        arcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, color: colors.orange, level: sleepScore })
        : arcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, color: colors.orange, level: 100 })
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
    const batteryWidget = hmUI.createWidget(hmUI.widget.IMG, {
      x: 232,
      y: 160,
      src: '',
    })
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
        x: 232,
        y: 160,
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
    hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerProps);
  },

  buildLinks() { //STROKE_RECT
    hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x: 20,
      y: 140,
      w: 50,
      h: 50,
      // color: colors.red,
      type: hmUI.data_type.HEART
    }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 290,
        y: 20,
        w: 50,
        h: 50,
        // color: colors.red,
        type: hmUI.data_type.STEP
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 410,
        y: 290,
        w: 50,
        h: 50,
        // color: colors.red,
        type: hmUI.data_type.RECOVERY_TIME
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 140,
        y: 410,
        w: 50,
        h: 50,
        // color: colors.red,
        type: hmUI.data_type.TRAINING_LOAD
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 205,
        y: 140,
        w: 75,
        h: 75,
        // color: colors.red,
        type: hmUI.data_type.READINESS
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 145,
        y: 205,
        w: 75,
        h: 75,
        // color: colors.red,
        type: hmUI.data_type.PAI_WEEKLY
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 205,
        y: 265,
        w: 75,
        h: 75,
        // color: colors.red,
        type: hmUI.data_type.SLEEP
      })
  }
});
