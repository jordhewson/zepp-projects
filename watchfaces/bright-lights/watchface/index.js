import { colors, fontFamily, fontSize } from "../utils/constants";
import { bgProps, dateProps, dayProps, dialBgProps, dialPointerProps, pointerProps, updatesHealthProps, updatesWeatherProps, wellnessArc1Props, wellnessArc2Props, wellnessArc3Props, wellnessIcon1Props, wellnessIcon2Props, wellnessIcon3Props, worldCityProps } from "./index.r.layout";

WatchFace({
  onInit() {
    console.log('index page.js on init invoke')
  },

  build() {
    console.log('index page.js on build invoke');

    this.buildBackground();
    this.buildDate();
    this.buildUpdates();
    this.buildDial();
    this.buildWellnessIndicators();
    this.buildPointers();
    this.buildLinks();
  },

  onDestroy() {
    console.log('index page.js on destroy invoke')
  },

  buildBackground() {
    hmUI.createWidget(hmUI.widget.IMG, bgProps);
  },

  buildDate() {
    hmUI.createWidget(hmUI.widget.IMG_WEEK, dayProps);
    hmUI.createWidget(hmUI.widget.IMG_DATE, dateProps);
  },

  buildDial() {
    hmUI.createWidget(hmUI.widget.IMG, dialBgProps);
    const worldCityName = hmUI.createWidget(hmUI.widget.TEXT, worldCityProps);
    const hourPointer = hmUI.createWidget(hmUI.widget.IMG, dialPointerProps)

    const update = () => {
      const worldClock = hmSensor.createSensor(hmSensor.id.WORLD_CLOCK);
      worldClock.init();

      console.log('world clock rerendered');

      const count = worldClock.getWorldClockCount()
      if (count > 0) {
        const worldData = worldClock.getWorldClockInfo(0)
        console.log('worldName=' + worldData.city)
        console.log('worldHour=' + worldData.hour)
        console.log('worldMinute=' + worldData.minute)

        const pointerImg = worldData.hour > 11 ? 'widget/widget_pointer_pm.png' : 'widget/widget_pointer_am.png';

        const angle = 360 / 12 * (worldData.hour > 12 ? worldData.hour - 12 : worldData.hour)
        worldCityName.setProperty(hmUI.prop.TEXT, worldData.city.toUpperCase())
        hourPointer.setProperty(hmUI.prop.MORE, {
          ...dialPointerProps,
          src: pointerImg,
          angle: angle,
        })
      }
      worldClock.uninit()
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

  buildWellnessIndicators() {
    hmUI.createWidget(hmUI.widget.IMG, wellnessIcon1Props);
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc1Props,
      color: colors.outline,
      level: 100
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc1Props,
      color: colors.aod,
      type: hmUI.data_type.READINESS
    });
    hmUI.createWidget(hmUI.widget.IMG, wellnessIcon2Props);
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc2Props,
      color: colors.outline,
      level: 100
    });
    const paiArc = hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc2Props,
      color: colors.aod,
      level: 0,
    });
    hmUI.createWidget(hmUI.widget.IMG, wellnessIcon3Props);
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc3Props,
      color: colors.outline,
      level: 100
    });
    hmUI.createWidget(hmUI.widget.ARC_PROGRESS, {
      ...wellnessArc3Props,
      color: colors.aod,
      type: hmUI.data_type.SLEEP
    });

    const update = () => {
      const value = hmSensor.createSensor(hmSensor.id.PAI);
      value.totalpai < 100 ?
        paiArc.setProperty(hmUI.prop.MORE, { ...wellnessArc2Props, color: colors.aod, level: value.totalpai })
        : paiArc.setProperty(hmUI.prop.MORE, { ...wellnessArc2Props, color: colors.aod, level: 100 })
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

  buildUpdates() {
    const weatherUpdates = hmUI.createWidget(hmUI.widget.TEXT, updatesWeatherProps);
    const healthUpdates = hmUI.createWidget(hmUI.widget.TEXT, updatesHealthProps);

    const update = () => {
      const time = hmSensor.createSensor(hmSensor.id.TIME)
      const weather = hmSensor.createSensor(hmSensor.id.WEATHER)
      const steps = hmSensor.createSensor(hmSensor.id.STEP)
      const heart = hmSensor.createSensor(hmSensor.id.HEART)
      const sleep = hmSensor.createSensor(hmSensor.id.SLEEP)
      const sleepInfo = sleep.getBasicInfo()
      const sleepTime = sleep.getTotalTime()

      const weatherData = weather.getForecastWeather()
      const currentSteps = steps.current
      const lastHr = heart.last

      console.log(`weather city: ${weatherData.cityName}`)

      const forecast = weatherData.forecastData
      const todayWeather = forecast.data[0];
      const tomorrowWeather = forecast.data[1];
      const weatherString = time.hour < 19 ?
      `${weatherData.cityName.toUpperCase()} TODAY: ${todayWeather.high} / ${todayWeather.low}` :
      `${weatherData.cityName.toUpperCase()} TMRW: ${tomorrowWeather.high} / ${tomorrowWeather.low}`;

      const roundedSteps = Math.trunc(currentSteps / 1000)
      const healthString = time.hour < 10 ?
      `${sleepInfo.score} SLEEP: ${Math.trunc(sleepTime / 60)}H ${sleepTime % 60}M` :
      `${roundedSteps}K STEPS | ${lastHr} HR`;

      weatherUpdates.setProperty(hmUI.prop.MORE, {
        ...updatesWeatherProps,
        text: weatherString
      })

      healthUpdates.setProperty(hmUI.prop.MORE, {
        ...updatesHealthProps,
        text: healthString
      })
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

  buildPointers() {
    hmUI.createWidget(hmUI.widget.TIME_POINTER, pointerProps);
  },


  buildLinks() {
    hmUI.createWidget(hmUI.widget.IMG_CLICK, {
      x: 90 - 25,
      y: 240 - 25,
      w: 50,
      h: 50,
      type: hmUI.data_type.READINESS
    }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 135 - 25,
        y: 195 - 25,
        w: 50,
        h: 50,
        type: hmUI.data_type.PAI_WEEKLY
      }),
      hmUI.createWidget(hmUI.widget.IMG_CLICK, {
        x: 135 - 25,
        y: 285 - 25,
        w: 50,
        h: 50,
        type: hmUI.data_type.SLEEP
      })
  },
})
