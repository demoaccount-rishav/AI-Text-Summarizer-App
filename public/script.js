const textArea = document.getElementById("text_to_summarize");

const submitButton = document.getElementById("submit-button");

const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

function verifyTextLength(e) {

  const text = e.target.value;

  submitButton.disabled = (text.length > 200 && text.length < 100000) ? false : true;

}

function submitData(e) {

  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  // INSERT CODE SNIPPET FROM POSTMAN BELOW
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw
  };

  fetch("/summarize", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      summarizedTextArea.value = result;
      submitButton.classList.remove("submit-button--loading");
    })
    .catch((error) => console.error(error));
}

textArea.addEventListener("input", verifyTextLength);

submitButton.addEventListener("click", submitData);