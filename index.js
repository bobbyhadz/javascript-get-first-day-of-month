// EXAMPLE 1 - Get the First and Last Date of a Month in JavaScript

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}

// ✅ Get the first day of the current month
const date = new Date();
const firstDay = getFirstDayOfMonth(
  date.getFullYear(),
  date.getMonth(),
);
console.log(firstDay);

// ------------------------------------------------------

// ✅ Get the first day of any month
const firstDayJanuary = getFirstDayOfMonth(2025, 0);
console.log(firstDayJanuary); // 👉️ Wed Jan 01 2025

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the last day of the month

// function getLastDayOfMonth(year, month) {
//   return new Date(year, month + 1, 0);
// }

// // ✅ Get the last day of current month
// const date = new Date();
// const lastDayCurrentMonth = getLastDayOfMonth(
//   date.getFullYear(),
//   date.getMonth(),
// );
// console.log(lastDayCurrentMonth);

// // ✅ Get the last day of ANY month
// const lastDayJan = getLastDayOfMonth(2025, 0);
// console.log(lastDayJan); // 👉️ Fri Jan 31 2025

// ------------------------------------------------------------------

// // EXAMPLE 3 - Getting the first day of the next month

// function getFirstDayOfMonth(year, month) {
//   return new Date(year, month, 1);
// }

// const date = new Date();

// const firstDayNextMonth = getFirstDayOfMonth(
//   new Date().getFullYear(),
//   date.getMonth() + 1,
// );

// // 👇️ Tue Aug 01 2023
// console.log(firstDayNextMonth);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get First and Last day of the Previous Month in JavaScript

// // ✅ Get the first day of the previous month

// function getFirstDayPreviousMonth() {
//   const date = new Date();
//   return new Date(date.getFullYear(), date.getMonth() - 1, 1);
// }

// console.log(getFirstDayPreviousMonth()); // 👉️ Tue 1st December

// // ------------------------------------------------

// // ✅ Get the last day of the previous month

// function getLastDayPreviousMonth() {
//   const date = new Date();
//   return new Date(date.getFullYear(), date.getMonth(), 0);
// }

// console.log(getLastDayPreviousMonth()); // 👉️ Sun 31st December

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the first day of the previous month in JavaScript

// const date = new Date('2023-02-04');

// const firstDayPrevMonth = new Date(
//   date.getFullYear(),
//   date.getMonth() - 1,
//   1,
// );

// // 👇️ Sun Jan 01 2023 00:00:00
// console.log(firstDayPrevMonth);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the last day of the previous month in JavaScript

// const date = new Date('2022-01-17');

// const firstDayPrevMonth = new Date(
//   date.getFullYear(),
//   date.getMonth() - 1,
//   1,
// );
// // 👇️ Wed Dec 01 2021 00:00:00
// console.log(firstDayPrevMonth);

// const lastDayPrevMonth = new Date(
//   date.getFullYear(),
//   date.getMonth(),
//   0,
// );
// // 👇️ Fri Dec 31 2021 00:00:00
// console.log(lastDayPrevMonth);
