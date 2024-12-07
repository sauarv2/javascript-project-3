const form = document.querySelector("form");
const result = document.querySelector(".resultDiv");
const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const textInfo = document.querySelector(".info-text");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  textInfo.textContent = "";
  wordInfo(input.value);
});

const wordInfo = async (word) => {
  try {
    result.innerHTML = `<p>Loding Data</p>`;

    // ****************************************

    const response = await fetch(
      ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let data = await response.json();
    let definations = data[0].meanings[0].definitions[0];

    // *************************

    result.innerHTML = `
    <h2><strong>word:</strong>${data[0].word}</h2>
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meanings:</strong> ${
      definations.definition === undefined
        ? "not found"
        : definations.definition
    }</p>
    <p><strong>Example:</strong> ${
      definations.example === undefined ? "not found" : definations.example
    }</p>
  
    <strong>Antonyms:</strong>
  
    `;
    // **************************************************
    let antonymsLengtth = definations.antonyms.length;

    // using loop********************************

    // fetching antonyms************************************
    if (antonymsLengtth === 0) {
      result.innerHTML += `<span>not found</span> `;
    } else {
      for (let i = 0; i < antonymsLengtth; i++) {
        result.innerHTML += `<span> an ${definations.antonyms[i]}</span>`;
      }
    }

    result.innerHTML += `<div><a href= "${data[0].sourceUrls}" target="_blank">Readmore</a></div>`;
  } catch (error) {
    result.innerHTML = `<strong><p>Word no Found</p></strong>`;
  }

  console.log(data);
};
