import { colors, dayOfWeek, months } from '../utils/constants';
import { formatK } from '../utils/format_num';

import {
  bgProps,
  bgLevel,
  pointerProps,
  dayText,
  dateText,
  arc1,
  arc2,
  arc3,
  arc4,
  topDialArc,
  topDialIcon,
  leftDialArc,
  leftDialIcon,
  bottomDialArc,
  bottomDialIcon,
  icon1,
  icon2,
  icon3,
  icon4,
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
    this.buildArc1();
    this.buildArc2();
    this.buildArc3();
    this.buildArc4();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildBackground() {
    const background = hmUI.createWidget(hmUI.widget.IMG, bgProps);
    // const moodRing = hmUI.createWidget(hmUI.widget.IMG, bgProps);
    hmUI.createWidget(hmUI.widget.IMG, {
      ...bgProps,
      src: 'background/bg-dial.png'
    });

    // let prevValue = null;

    // const update = () => {
    //   const { current } = hmSensor.createSensor(hmSensor.id.STRESS)

    //   if (prevValue === current) {
    //     return;
    //   };

    //   console.log('stress rerendered');

    //   prevValue = current;

    //   const src = current < 1 ? bgLevel[0]
    //     : current < 41 ? bgLevel[1]
    //     : current < 61 ? bgLevel[2]
    //     : current < 81 ? bgLevel[3]
    //       : bgLevel[4];

    //   moodRing.setProperty(hmUI.prop.MORE, {
    //     ...bgProps,
    //     src: src,
    //   });

    //   console.log(`Battery: ${current}`);
    // };

    // hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
    //   resume_call: () => {
    //     console.log('ui resume');

    //     if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
    //       update();
    //     }
    //   },
    // });
  },

  buildDate() {
    const dayWidget = hmUI.createWidget(hmUI.widget.TEXT, dayText)
    const dateWidget = hmUI.createWidget(hmUI.widget.TEXT, dateText)
    let prevValue = null;

    const update = () => {
      const time = hmSensor.createSensor(hmSensor.id.TIME)
      const day = dayOfWeek[time.week - 1]
      const date = `${months[time.month - 1]} ${time.day.toString()}`

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
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...topDialArc,
      color: colors.blue,
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
      color: colors.yellow,
      level: 0,
    });
    hmUI.createWidget(hmUI.widget.IMG, leftDialIcon);

    const update = () => {
      const pai = hmSensor.createSensor(hmSensor.id.PAI);
      const totalPai = pai.totalpai;
      console.log(`PAI: ${totalPai}`)
      pai.totalpai < 100 ?
        arcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, color: colors.yellow, level: totalPai })
        : arcWidget.setProperty(hmUI.prop.MORE, { ...leftDialArc, color: colors.yellow, level: 100 })
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
      color: colors.purple_dark,
      type: hmUI.data_type.SLEEP,
    })
    const arcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...bottomDialArc,
      color: colors.purple,
      // type: hmUI.data_type.SLEEP,
      level: 100,
    })
    hmUI.createWidget(hmUI.widget.IMG, bottomDialIcon);

    const update = () => {
      const sleep = hmSensor.createSensor(hmSensor.id.SLEEP);
      const sleepScore = sleep.getBasicInfo().score;
      console.log(`Sleep Score: ${sleepScore}`)
      sleepScore < 100 ?
        arcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, color: colors.purple, level: sleepScore })
        : arcWidget.setProperty(hmUI.prop.MORE, { ...bottomDialArc, color: colors.purple, level: 100 })
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

  buildArc1() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc1,
      color: colors.orange_dark,
      level: 100
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc1,
      color: colors.orange,
      type: hmUI.data_type.HEART
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      ...icon1,
      src: 'widget/icon/heart rate.png'
    })
  },

  buildArc2() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc2,
      color: colors.orange_dark,
      level: 100
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc2,
      color: colors.orange,
      type: hmUI.data_type.STEP
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      ...icon2,
      src: 'widget/icon/steps.png'
    })
  },

  buildArc3() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc3,
      color: colors.orange_dark,
      level: 100
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc3,
      color: colors.orange,
      type: hmUI.data_type.RECOVERY_TIME
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      ...icon3,
      src: 'widget/icon/countdown.png'
    })
  },

  buildArc4() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc4,
      color: colors.orange_dark,
      level: 100
    })
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...arc4,
      color: colors.orange,
      type: hmUI.data_type.TRAINING_LOAD
    })
    hmUI.createWidget(hmUI.widget.IMG, {
      ...icon4,
      src: 'widget/icon/training.png'
    })
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
