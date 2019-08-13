/**
 * This class creates a Date obj out of an args array
 *@class
 *@param { Date } input a date in various formats
 *@returns { Date } an instantiation of the Date class in js as an object
 */
class MyDate {
  constructor(...args) {
    this.date = new Date(...args);
  }

  /**
   * This method on my Date class returns the year of the date formatted as a string
   * @method
   * @returns { String } formated year
   */
  year() {
    const year = String(this.date).split(' ');
    return year[3];
  }

  /**
   * This method on my Date class returns the month of the date formatted as a string
   * @method
   * @returns { String } formated month
   */

  month() {
    const month = String(this.date).split(' ');
    return month[1];
  }

  /**
   * This method on my Date class returns the day of the date formatted as a string
   * @method
   * @returns { String } formated day
   */
  day() {
    const day = String(this.date).split(' ');
    return day[0];
  }

  /**
   * This method on my Date class returns the hour of the date formatted as a string
   * @method
   * @returns { String } formated hour
   */
  justHours() {
    const convert = String(this.date);
    const hour = new Date(convert);
    return hour.getHours();
  }

  /**
   * This method on my Date class returns the mins of the date formatted as a string
   * @method
   * @returns { String } formated mins
   */
  justMins() {
    const convert = String(this.date);
    const mins = new Date(convert);
    return mins.getMinutes();
  }

  /**
   * This method on my Date class returns the year of the date formatted as a string
   * @method
   * @returns { String } formated year
   */
  justSecs() {
    const convert = String(this.date);
    const secs = new Date(convert);
    return secs.getSeconds();
  }

  /**
   * This method on my Date class returns the year of the date formatted as a string
   * @method
   * @params { String } can be in any format 'y/m/d', 'H:I:S', 'h:i:s', 'Y-M-D h:I:S' 
   * to include all or not you choice
   * @returns { String } formated Date with optional params
   * @example MyDate.format('y/m/d') => 2017/Jan/2 && MyDate.format('H:I:S') => 03:04:05
   */
  format(...args) {
    const date = String(this.date).split(' ');

    if (args.length === 0) {
      return `${date[3]} ${date[1]} ${date[2]}`;
    }

    const result = [];
    const arr = String(args).split('');

    for (let i = 0; i < arr.length; i += 1) {
      switch (arr[i]) {
        case 'Y': // 2019
          result.push(date[3]);
          break;
        case 'y': // 19
          result.push(date[3]);
          break;
        case 'M': { // july
          result.push(date[1]);
          break;
        }
        case 'm': { // jul
          result.push(date[1]);
          break;
        }
        case 'D': { // 01
          result.push(date[2]);
          break;
        }
        case 'd': { // 1
          result.push(date[2]);
          break;
        }
        case 'H': { // 05
          const time = date[4];
          const hour = time[0] + time[1]
          result.push(hour);
          break;
        }
        case 'h': { // 5
          const time = date[4];
          const hour = time[1];
          result.push(hour);
          break;
        }
        case 'I': { // 08 mins
          const time = date[4];
          const min = time[3] + time[4];
          result.push(min);
          break;
        }
        case 'i': { // 8
          const time = date[4];
          const min = time[4];
          result.push(min);
          break;
        }
        case 'S': { // 04 secs
          const time = date[4];
          const sec = time[6] + time[7];
          result.push(sec);
          break;
        }
        case 's': { // 4
          const time = date[4];
          const sec = time[7];
          result.push(sec);
          break;
        }
        default: {
          result.push(arr[i]);
        }
      }
    }
    return result.join('');
  }

  /**
   * This method on my Date class returns a description of 'when' a date will happen
   * @method
   * to include all or not you choice
   * @returns { String } formated Date with the time from today to the constructed date object
   * @example MyDate.when() => todays date - date of constructed date object
   */
  when() {
    const now = new Date();

    // Year difference
    const nowYear = now.getFullYear();
    const dateYear = this.date.getFullYear();
    if (nowYear !== dateYear) {
      if (nowYear < dateYear) {
        return `${dateYear - nowYear} year${(dateYear - nowYear) === 1 ? '' : 's'} from now`;
      }
      return `${nowYear - dateYear} year${(nowYear - dateYear) === 1 ? '' : 's'} ago`;
    }

    // Month difference
    const nowMonth = now.getMonth();
    const dateMonth = this.date.getMonth();
    if (nowMonth !== dateMonth) {
      if (nowMonth < dateMonth) {
        return `${dateMonth - nowMonth} month${(dateMonth - nowMonth) === 1 ? '' : 's'} from now`;
      }
      return `${nowMonth - dateMonth} month${(nowMonth - dateMonth) === 1 ? '' : 's'} ago`;
    }

    // Day difference
    const nowDay = now.getDate();
    const dateDay = this.date.getDate();
    if (nowDay !== dateDay) {
      if (nowDay < dateDay) {
        return `${dateDay - nowDay} day${(dateDay - nowDay) === 1 ? '' : 's'} from now`;
      }
      return `${nowDay - dateDay} day${(nowDay - dateDay) === 1 ? '' : 's'} ago`;
    }

    return 'Today';
  }
}
