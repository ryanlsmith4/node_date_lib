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
   * @returns { String } formated Date with optional params
   * @example MyDate.format('y/m/d') => 2017/Jan/2 && MyDate.format('H:I:S') => 03:04:05
   */
  format(...args) {
    const date = String(this.date).split(' ');
    const time = date[4].split(':');
    // console.log(time)
    const arr = [...args];
    const option = arr[0];
    switch (option) {
      case 'y/m/d':
        return `${date[3]}/${date[1]}/${parseInt(date[2], 10)}`;
      case 'H:I:S':
        return `${time[0]}:${time[1]}:${time[2]}`;
      case 'h:i:s':
        return `${parseInt(time[0], 10)}:${parseInt(time[1], 10)}:${parseInt(time[2], 10)}`;
      case 'Y-M-D h:I:S':
        return `${date[3]}-${date[1]}-${date[2]} ${parseInt(time[0], 10)}:${time[1]}:${time[2]}`
      default:
        return `${date[3]} ${date[1]} ${date[2]}`;
    }
  }
}

