async function getdata() {
  const input = document.querySelector("#input1").value;
  const input1 = input.toLowerCase();
  const data = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + input1
  );
  const word = await data.json();
  // console.log(word);
  try {
    const usercontainer = document.querySelector(".defo");
    let audio = new Audio(`https:${word[0].phonetics[0].audio}`);
    let definitions = word[0].meanings[0].definitions[0];
    usercontainer.innerHTML = `
  <div class="word">
  <p><b>WORD:</b> ${word[0].word}</p>
  <p><b>ORIGIN:</b> ${word[0].origin}</p></div>
  <div class="example">
  <p><b>MEANING:</b> ${definitions.definition}</p>
  <p><b>EXAMPLE:</b> ${definitions.example}</p></div>
  <div class="phonetics">
  <p><b>PHONETICS:</b> ${word[0].phonetics[0].text}</p>
  <button class="btn"><i class="fa fa-volume-up"></i></button>
   </div>
  `;
    let volume = document.querySelector(".btn");
    volume.addEventListener("click", () => {
      audio.play();
    });
  } catch (error) {
    // to catch the error
    const usercontainer = document.querySelector(".defo");
    usercontainer.innerHTML = `
   <div class="title">
  <p><b>TITLE:</b> ${word.title}</p> </div>
  <div class="message">
  <p><b>MESSAGE:<b> ${word.message}</p></div>
  <div class="resolve">
  <p><b>RESOLUTION:</b> ${word.resolution}</p></div>
  `;
  }
}
