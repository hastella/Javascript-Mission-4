const render = (container) => {
  container
    .querySelector(".date-picker")
    .addEventListener("click", function () {
      container.querySelector(".calendar").classList.add("render");
    });

  document.addEventListener("mouseup", function (e) {
    let calendar = container.querySelector(".calendar");
    if (!calendar.contains(e.target)) {
      calendar.classList.remove("render");
    }
  });
};

export default render;
