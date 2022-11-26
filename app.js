const datePicker = document.querySelector("main");
const selectedDate_el = document.querySelector("input");
const monthNext = document.querySelector(".calendar-nav .next-month");
const monthPrev = document.querySelector(".calendar-nav .prev-month");
const date_el = document.querySelector(".calendar");
const month_el = document.querySelector(".month");
const year_el = document.querySelector(".year");
const day_el = document.querySelector(".calendar-grid");
const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

selectedDate_el.textContent = formatDate(date);

datePicker.addEventListener("click", toggleDatePicker);
monthNext.addEventListener("click", goToNextMonth);
monthPrev.addEventListener("click", goToPrevMonth);
populateDates();

// 월, 년도 바꾸기
function goToNextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  month_el.textContent = months[month];
  year_el.textContent = year;
  populateDates();
}
function goToPrevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  month_el.textContent = months[month];
  year_el.textContent = year;
  populateDates();
}

function toggleDatePicker(e) {
  console.log(e.path);
  if (!checkClassExist(e.path, "calendar")) {
    date_el.classList.toggle("is-active");
  }
}

function checkClassExist(path, element) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(element)) {
      return true;
    }
  }
  return false;
}

// 날짜 채우기
function populateDates() {
  day_el.innerHTML = "";
  let totalDays;

  if (month === 1) {
    totalDays = 28; // 2월의 특수한 날짜 수를 지정해준다.
  } else if (month % 2 === 0) {
    // 1월의 인덱스 값이 0부터 시작하므로 1월, 3월, 5월을 나타낸다.
    totalDays = 31;
  } else totalDays = 30;

  // 요일 채우기
  for (let i = 0; i < weekdays.length; i++) {
    const week_element = document.createElement("div");
    week_element.classList.add("weekday");
    week_element.innerText = `${weekdays[i]}`;
    day_el.appendChild(week_element);
  }

  // 날짜 채우기
  for (let i = 0; i < totalDays; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("day");
    day_element.textContent = i + 1;

    if (
      selectedDay === i + 1 &&
      selectedYear === year &&
      selectedMonth === month
    ) {
      day_element.classList.add("selected");
    }

    day_element.addEventListener("click", function () {
      selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
      selectedDay = i + 1;
      selectedMonth = month;
      selectedYear = year;

      selectedDate_el.textContent = formatDate(selectedDate);

      populateDates();
    });
    day_el.appendChild(day_element);
  }
}

function formatDate(selectedDate) {
  let day = selectedDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = selectedDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = selectedDate.getFullYear();
  return year + "-" + month + "-" + day;
}
console.log(year + "-" + month + "-" + day);
