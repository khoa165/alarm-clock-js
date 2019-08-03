const formatDay = (day) => {
  switch(day) {
  case 0:
    return "Sunday";
    break;
  case 1:
    return "Monday";
    break;
  case 2:
    return "Tuesday";
    break;
  case 3:
    return "Wednesday";
    break;
  case 4:
    return "Thursday";
    break;
  case 5:
    return "Friday";
    break;
  case 6:
    return "Saturday";
    break;
  }
}

const formatOneDigit = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
};

const displayDateTime = () => {
  const current = new Date();
  const day = formatDay(current.getDay());
  const date = formatOneDigit(current.getDate());
  const month = formatOneDigit(current.getMonth() + 1);
  const year = current.getFullYear();
  const displayedDate = document.getElementById("date");
  displayedDate.innerText = `${day}, ${month}/${date}/${year}`;

  const hour = current.getHours();
  const minute = current.getMinutes();
  const second = formatOneDigit(current.getSeconds());
  const displayedTime = document.getElementById("time");
  displayedTime.innerText = `${hour}:${minute}:${second}`;
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(displayDateTime, 500); // Every 0.5 second.
});
