document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.getElementById("button-menu");
  const closeFlash = document.getElementById("close-flash");

  if (closeFlash) {
    closeFlash.addEventListener("click", () => {
      const flash = document.getElementById("flash");
      if (flash) {
        flash.classList.toggle("hidden");
      }
    });
  }

  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      const nav = document.getElementById("nav-mobile");
      if (nav) {
        nav.classList.toggle("hidden");
      }
    });
  }
});

function deleteNote(id) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: id }),
  }).then((_res) => {
    window.location.href = "/";
  });
}
