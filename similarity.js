async function querySimilarity(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
    {
      headers: {
        Authorization: "Bearer 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"},
        method: "POST",
        body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

document.getElementById("target-sentences").addEventListener("paste", function (e) {
    // Prevent the default paste behavior
    e.preventDefault();

    // Get the text content from the clipboard
    const text = (e.clipboardData || window.clipboardData).getData("text");

    // Remove all line breaks from the text
    const formattedText = text.replace(/\r?\n|\r/g, " ");

    // Insert the formatted text into the textarea
    document.execCommand("insertText", false, formattedText);
  });

function checkSimilarity() {
  const sourceSentence = document.getElementById("source-sentence").value;
  const targetSentences = document
    .getElementById("target-sentences")
    .value.split("\n");

  const data = {
    inputs: {
      source_sentence: sourceSentence,
      sentences: targetSentences,
    },
  };

  querySimilarity(data)
    .then((response) => {
      displayResults(response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayResults(response) {
  const resultsContainer = document.getElementById("similarity-results");
  resultsContainer.innerHTML = "";

  response.forEach((result, index) => {
    const resultElement = document.createElement("p");
    resultElement.textContent = `Similarity: ${Math.round(result * 100)}%`;
    resultsContainer.appendChild(resultElement);
  });
}

function toggleSimilarity() {
  const similarityContainer = document.getElementById("similarity-container");
  if (
    similarityContainer.style.display === "none" ||
    similarityContainer.style.display === ""
  ) {
    similarityContainer.style.display = "block";
  } else {
    similarityContainer.style.display = "none";
  }
}

document.getElementById("similarity-results").style.whiteSpace = "pre-wrap";