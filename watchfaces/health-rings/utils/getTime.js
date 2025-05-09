/**
 * Return time, seaprated for formatted text values
 * @param {*} timeSensor - hmSensor.id.TIME
 * @returns {Object}
 */
export function getTime(timeSensor, is12HourFormat = false) {
    let { hour, minute } = timeSensor;
  
    if (!is12HourFormat) {
      return {
        hoursText: hour.toString().padStart(2, '0'),
        minsText: minute.toString().padStart(2, '0'),
        postfixText: '',
      };
    }
  
    const isPm = hour > 11;
    hour = hour % 12 || 12;
  
    return {
      hoursText: hour.toString().padStart(2, '0'),
      minsText: minute.toString().padStart(2, '0'),
      postfixText: isPm ? 'PM' : 'AM',
    };
  };

  export function getPostfix(timeSensor, is12HourFormat) {
    if (!is12HourFormat) {
      return '';
    } else {
      const postfix = timeSensor.hour > 11 ? 'PM' : 'AM';
      return postfix;
    }
  };