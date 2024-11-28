// Pop-on work

let popOnWindow;

document.body.addEventListener("click", (event) => {
  let popOnBlock = event.target.closest(".service__pop-container");

  if (popOnWindow) {
    popOnWindow.classList.remove("active");
    popOnWindow = null;
  }
  if (popOnBlock) {
    popOnWindow = popOnBlock.querySelector(".additional");
    popOnWindow.classList.add("active");
  }
});

if (document.documentElement.clientWidth > 1440) {
  document.querySelectorAll(".service__pop-container").forEach((container) => {
    let timeDelete;
    container.addEventListener("mouseleave", () => {
      timeDelete = setTimeout(() => {
        container.querySelector(".additional").classList.remove("active");
      }, 500);
    });

    container.addEventListener("mouseenter", () => {
      if (timeDelete) clearInterval(timeDelete);
    });
  });
}
