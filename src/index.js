function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "falling leaves in autumn",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let formGenerator = document.querySelector("#generator-form");
formGenerator.addEventListener("submit", generatePoem);
