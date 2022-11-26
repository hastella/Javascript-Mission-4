const month_el = document.querySelector(".month");
const year_el = document.querySelector(".year");
const day_el = document.querySelector(".calendar-grid");
const monthNext = document.querySelector(".calendar-nav .next-month");
const monthPrev = document.querySelector(".calendar-nav .prev-month");

monthNext.addEventListener("click", goToNextMonth);
monthPrev.addEventListener("click", goToPrevMonth);

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

month_el.textContent = months[month];
year_el.textContent = year;

// 월, 년도 바꾸기
function goToNextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  month_el.textContent = months[month];
  year_el.textContent = year;
}
function goToPrevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  month_el.textContent = months[month];
  year_el.textContent = year;
}

// days 나타내기
for (let i = 0; i < days.length; i++) {
  const day_element = document.createElement("div");
  day_element.classList.add("weekday");
  day_element.innerText = `${days[i]}`;
  document.querySelector("calendar-grid").appendChild(day_element);
}
