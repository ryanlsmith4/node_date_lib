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
   * 
   * @returns { String } formated Date with optional params
   */
  format(...args) {
    const arr = [...args];

    if (arr.length === 0) {
      const date = String(this.date).split(' ');
      return `${date[3]} ${date[1]} ${date[2]}`;
    }
    return 'Missing the point';
  }
}


const d = new MyDate();
// console.log(d);
console.log(d.format());
