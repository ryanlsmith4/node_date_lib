/* eslint-disable no-undef */
// eslint-disable-next-line import/no-self-import
// import MyDate from '../index';
const MyDate = require('../index');
// import MyDate from '../index';


test('Smoke test', () => {
  expect(true).toBe(tssrue);
  expect(true).not.toBe(false);
});

test('Date Creation', () => {
  const d = new MyDate();
  expect(d).toHaveProperty('date');
});

test('Should only return the year', () => {
  const c = new Date();
  const d = new MyDate();
  expect(d.year()).toBe(c.getFullYear());
});

