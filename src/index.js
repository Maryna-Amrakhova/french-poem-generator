function displayPoem(responce) {
  console.log("generated");
  new Typewriter("#poem", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // build the API URL
  // make a call to the API (using axios)
  // display the generated poem

  let userInstruction = document.querySelector("#user-context");
  let apiKey = "btf3a0c41c82o04bde5657e178c809b4";
  let prompt = `User instructions: Generate a French poem about ${userInstruction.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 lines poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let formGenerator = document.querySelector("#generator-form");
formGenerator.addEventListener("submit", generatePoem);
