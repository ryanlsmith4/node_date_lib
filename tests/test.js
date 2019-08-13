/* eslint-disable no-undef */
// eslint-disable-next-line import/no-self-import
// import MyDate from '../index';
const DateObj = require('../index');
//   exports
// import MyDate from '../index';

test('Smoke test', () => {
  expect(true).toBe(true);
  expect(true).not.toBe(false);
});

test('Date Creation', () => {
  const d = new DateObj.MyDate();
  expect(d).toHaveProperty('date');
});

test('Should only return the year', () => {
  const c = new Date();
  const d = new DateObj.MyDate();
  expect(d.year()).toBe(String(c.getFullYear()));
});

test('Should only return the month', () => {
  const c = String(new Date()).split(' ');
  const d = new DateObj.MyDate();
  expect(d.month()).toBe(c[1]);
});
