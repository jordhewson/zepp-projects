import { colors, dayOfWeek } from '../utils/constants';
import { formatK } from '../utils/format_num';

import {
  S_WIDGET_L_DATA_PROPS,
  S_WIDGET_R_DATA_PROPS,
  WIDGET_L_ICON,
  WIDGET_L_TEXT,
  WIDGET_C_ICON,
  WIDGET_R_BACKGROUND,
  WIDGET_R_ICON,
  WIDGET_R_TEXT,
  WIDGET_L_ARC,
  pointerConfig,
  bgConfig,
  WIDGET_C_IMG_PROPS,
  S_WIDGET_L_TEXT,
  S_WIDGET_R_TEXT,
  DAY_TEXT,
  DATE_TEXT,
  WIDGET_C_TEXT_IMG,
  WIDGET_R_ARC,
  S_WIDGET_C_ARC_L,
  S_WIDGET_C_ARC_R,
} from './index.r.layout';

WatchFace({
  onInit() {
    console.log('index page.js on init invoke');
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildBackground();
    this.buildDate();
    this.buildSmallWidgetL();
    // this.buildSmallWidgetC();
    this.buildSmallWidgetR();
    this.buildWidgetL();
    this.buildWidgetC();
    this.buildWidgetR();
    this.buildBattery();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke');
  },

  buildBackground() {
    const editBg = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_BG, {
      edit_id: 0,
      x: 0,
      y: 0,
      bg_config: bgConfig,
      count: bgConfig.length,
      default_id: 1,
      fg: 'pointers/pointer_edit.png',
      tips_x: 178,
      tips_y: 428,
      tips_bg: 'pointers/tips.png',
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    // hmUI.createWidget(hmUI.widget.IMG, BG_IMAGE_PROPS);
  },

  buildDate() {
    const dayWidget = hmUI.createWidget(hmUI.widget.TEXT, DAY_TEXT)
    const dateWidget = hmUI.createWidget(hmUI.widget.TEXT, DATE_TEXT)
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

  buildSmallWidgetL() {
    // hmUI.createWidget(hmUI.widget.IMG, S_WIDGET_L_ICON);
    hmUI.createWidget(hmUI.widget.TEXT, S_WIDGET_L_TEXT);
    const stepsWidget = hmUI.createWidget(hmUI.widget.TEXT, S_WIDGET_L_DATA_PROPS);
    let prevValue = null;

    const update = () => {
      const step = hmSensor.createSensor(hmSensor.id.STEP);

      const thousand = step.current / 1000;
      const rounded = formatK(step.current);

      if (prevValue === rounded) {
        return;
      }

      console.log(`Steps: ${rounded}`);

      prevValue = rounded;
      const text = `${rounded}`;
      stepsWidget.setProperty(hmUI.prop.MORE, {
        ...S_WIDGET_L_DATA_PROPS,
        text: text,
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

  buildSmallWidgetC() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...S_WIDGET_C_ARC_L,
      color: colors.outline,
      level: 100
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...S_WIDGET_C_ARC_L,
      color: colors.blue,
      type: hmUI.data_type.TRAINING_LOAD
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...S_WIDGET_C_ARC_R,
      color: colors.outline,
      level: 100
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...S_WIDGET_C_ARC_R,
      color: colors.orange,
      type: hmUI.data_type.RECOVERY_TIME
    });
  },

  buildSmallWidgetR() {
    // hmUI.createWidget(hmUI.widget.IMG, S_WIDGET_R_ICON);
    hmUI.createWidget(hmUI.widget.TEXT, S_WIDGET_R_TEXT);
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, S_WIDGET_R_DATA_PROPS);

    const update = () => {
      const { last } = hmSensor.createSensor(hmSensor.id.HEART);

      if (last) {
        textWidget.setProperty(hmUI.prop.TEXT, last.toString());
      } else {
        textWidget.setProperty(hmUI.prop.TEXT, '--');
      }
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        console.log('ui resume');
        update();
      },
    });
  },

  buildWidgetL() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...WIDGET_L_ARC,
      color: colors.outline,
      level: 100,
    })
    const arcWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...WIDGET_L_ARC,
      color: colors.yellow,
      level: 0,
    });
    hmUI.createWidget(hmUI.widget.IMG, WIDGET_L_ICON);
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, WIDGET_L_TEXT);

    const update = () => {
      const value = hmSensor.createSensor(hmSensor.id.PAI);
      textWidget.setProperty(hmUI.prop.TEXT, value.totalpai.toString());
      value.totalpai < 100 ?
        arcWidget.setProperty(hmUI.prop.MORE, { ...WIDGET_L_ARC, level: value.totalpai })
        : arcWidget.setProperty(hmUI.prop.MORE, { ...WIDGET_L_ARC, level: 100 })
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

  buildWidgetC() {
    hmUI.createWidget(hmUI.widget.IMG_LEVEL, WIDGET_C_IMG_PROPS)
    hmUI.createWidget(hmUI.widget.IMG, WIDGET_C_ICON);
    hmUI.createWidget(hmUI.widget.TEXT_IMG, WIDGET_C_TEXT_IMG);
  },

  buildWidgetR() {
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, WIDGET_R_BACKGROUND);
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, WIDGET_R_ARC);
    hmUI.createWidget(hmUI.widget.IMG, WIDGET_R_ICON);
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, WIDGET_R_TEXT);

    const update = () => {
      const sleep = hmSensor.createSensor(hmSensor.id.SLEEP);
      const sleepInfo = sleep.getBasicInfo();
      textWidget.setProperty(hmUI.prop.TEXT, sleepInfo.score.toString());
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
    let pointerEdit = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_POINTER, {
      edit_id: 1,
      x: 0,
      y: 0,
      config: pointerConfig,
      count: pointerConfig.length,
      default_id: 1,
      fg: 'pointers/pointer_edit.png',
      tips_x: 178,
      tips_y: 428,
      tips_bg: 'pointers/tips.png'
    });

    const screenType = hmSetting.getScreenType()
    const aodModel = screenType == hmSetting.screen_type.AOD
    const pointerProp = pointerEdit.getProperty(
      hmUI.prop.CURRENT_CONFIG,
      !aodModel,
    )

    hmUI.createWidget(hmUI.widget.TIME_POINTER, {
      ...pointerProp,
      minute_cover_path: 'pointers/cover.png',
      minute_cover_x: 0,
      minute_cover_y: 0,
    })
    // hmUI.createWidget(hmUI.widget.TIME_POINTER, HOUR_POINTER_PROPS);
    // hmUI.createWidget(hmUI.widget.TIME_POINTER, MINUTE_POINTER_PROPS);
  },

  buildLinks() {
    hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x: 109,
      y: 97,
      w: 50,
      h: 50,
      type: hmUI.data_type.STEP
    }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 324,
        y: 97,
        w: 50,
        h: 50,
        type: hmUI.data_type.HEART
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 62,
        y: 190,
        w: 100,
        h: 100,
        type: hmUI.data_type.PAI_WEEKLY
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 190,
        y: 305,
        w: 100,
        h: 100,
        type: hmUI.data_type.READINESS
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 318,
        y: 190,
        w: 100,
        h: 100,
        type: hmUI.data_type.SLEEP
      })
  }
});
