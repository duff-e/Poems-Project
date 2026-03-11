function displayPoem(response) {
  console.log(response.data.answer);

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let apiKey = "40o03736bbe0e6faa9b79f5dt4af0a0f";
  let context =
    "You are a poet, and specialised in writing short poems. You create poems that are maximum 5 lines and always seperate each line with <br  /> using basic HTML. Sign the poem only at the bottom with 'SheCodes AI' in <strong>";
  let userInput = document.querySelector("#generator");
  let prompt = `Create a super short poem about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let loadingPoem = document.querySelector("#poem");
  loadingPoem.innerHTML = "Generating a poem for you, please wait...";
  console.log("Generating a poem for you.");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
