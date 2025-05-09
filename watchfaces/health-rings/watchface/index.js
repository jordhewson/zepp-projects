import { batteryArray, colors, weekArray } from "../utils/constants";
import { isNight } from "../utils/isNight";
import { updateWeatherIcons, WEATHER_ICONS } from "../utils/weatherIcons";
import { batteryArc, batteryStatus, colonLayout, dateLayout, dayLayout, ring1Icon, ring1Layout, ring1Text, ring2Icon, ring2Layout, ring2Text, ring3Icon, ring3Layout, ring3Text, smallWidget1Icon, smallWidget1Text, smallWidget2Icon, smallWidget2Text, timeLayout } from "./index.r.layout";

WatchFace({
  onInit() {
    console.log('index page.js on init invoke')
  },

  build() {
    console.log('index page.js on build invoke');
    this.buildTime();
    this.buildDate();
    this.buildBattery();
    this.buildRing1();
    this.buildRing2();
    this.buildWeather();
    this.buildHeart();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke')
  },

  buildTime() {
    const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, timeLayout);
    const colonWidget = hmUI.createWidget(hmUI.widget.IMG, colonLayout);
  },

  buildDate() {
    const dayWidget = hmUI.createWidget(hmUI.widget.TEXT, dayLayout);
    const dateWidget = hmUI.createWidget(hmUI.widget.TEXT, dateLayout);

    let prevDay = '';
    let updateTimer = undefined;

    const update = () => {
      const { day, week } = hmSensor.createSensor(hmSensor.id.TIME);

      if (prevDay === day) {
        return;
      }

      console.log(`date rerendered: ${weekArray[week - 1]} (${week}) ${day}`);
      prevDay = day;

      const dayString = weekArray[week - 1];
      const dateString = day.toString();

      dayWidget.setProperty(hmUI.prop.TEXT, `${dayString}`);
      dateWidget.setProperty(hmUI.prop.TEXT, `${dateString}`);
    };

    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: () => {
        console.log('ui resume');

        if (hmSetting.getScreenType() == hmSetting.screen_type.WATCHFACE) {
          // updateTimer = timer.createTimer(1000, 1000, update);
          update();
        }
      },
      pause_call: () => {
        console.log('ui pause');

        timer.stopTimer(updateTimer);
      },
    });
  },

  buildBattery() {
    const statusWidget = hmUI.createWidget(hmUI.widget.IMG, batteryStatus);
    const outlineWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...batteryArc,
      color: colors.outline,
      level: 100,
    });
    const levelWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, batteryArc);

    let prevValue = null;

    const update = () => {
      const { current } = hmSensor.createSensor(hmSensor.id.BATTERY);

      if (prevValue === current) {
        return;
      };

      console.log('battery rerendered');

      prevValue = current;

      const color = current > 49 ? colors.green
      : current > 25 ? colors.yellow
      : colors.red;

      const src = current > 49 ? batteryArray[2]
      : current > 25 ? batteryArray[1]
      : batteryArray[0];

      levelWidget.setProperty(hmUI.prop.MORE, {
        ...batteryArc,
        level: current,
        color: color,
      });

      statusWidget.setProperty(hmUI.prop.MORE, {
        ...batteryStatus,
        src: src,
      });
      
      console.log(`Battery: ${current}`);
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

  buildRing1() {
    const progressWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, ring1Layout);

    hmUI.createWidget(hmUI.widget.IMG, ring1Icon);

    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, ring1Text);

    let prevValue = null;

    const update = () => {
      const { current, target } = hmSensor.createSensor(hmSensor.id.STEP);

      if (prevValue === current) {
        return;
      }

      console.log('steps rerendered');

      prevValue = current;
      const progress = (current / target) > 1 ? 100 : (current / target) * 100;
      const text = `${current}`;

      progressWidget.setProperty(hmUI.prop.MORE, {
        ...ring1Layout,
        level: progress,
      });

      textWidget.setProperty(hmUI.prop.TEXT, text);
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

  buildRing2() {
    const progressWidget = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, ring2Layout);

    hmUI.createWidget(hmUI.widget.IMG, ring2Icon);

    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, ring2Text);

    let prevValue = null;

    const update = () => {
      const { current, target } = hmSensor.createSensor(hmSensor.id.CALORIE);

      if (prevValue === current) {
        return;
      }

      console.log('calories rerendered');

      prevValue = current;
      const progress = (current / target) > 1 ? 100 : (current / target) * 100;
      const text = `${current}`;

      progressWidget.setProperty(hmUI.prop.MORE, {
        ...ring2Layout,
        level: progress,
      });

      textWidget.setProperty(hmUI.prop.TEXT, text);
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

  buildWeather() {
    const weatherWidget = hmUI.createWidget(hmUI.widget.IMG, smallWidget1Icon);
    const tempWidget = hmUI.createWidget(hmUI.widget.TEXT, smallWidget1Text);

    const update = () => {
      const weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);
      const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
      const iconIndex = weatherSensor.curAirIconIndex;
      const currentTemp = weatherSensor.current;

      console.log(`Current temp: ${currentTemp}`);

      updateWeatherIcons(isNight(timeSensor));

      const icon =
        iconIndex && iconIndex !== 'undefined'
          ? WEATHER_ICONS[iconIndex]
          : WEATHER_ICONS[25];

      weatherWidget.setProperty(hmUI.prop.MORE, {
        ...smallWidget1Icon,
        src: icon,
      });

      tempWidget.setProperty(hmUI.prop.TEXT, `${currentTemp}`)
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

  buildHeart() {
    hmUI.createWidget(hmUI.widget.IMG, smallWidget2Icon);
    const textWidget = hmUI.createWidget(hmUI.widget.TEXT, smallWidget2Text);

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
})
