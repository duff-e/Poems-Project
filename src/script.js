function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red<br>Violets are blue",
    autoStart: true,
    delay: 20,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
