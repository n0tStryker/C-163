AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "w" ||
        e.key === "d" ||
        e.key === "a" ||
        e.key === "s"
      ) {
        var entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
      }
    });
  },
});

