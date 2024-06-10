// require("dotenv").config();

// async function query(data) {
//   const response = await fetch(
//     "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   );
//   const result = await response.json();
//   return result;
// }

// // Define the sentences for similarity comparison
// const data = {
//   inputs: {
//     source_sentence:
//       "In the era of artificial intelligence (AI) co-creation, novice composers face significant challenges when collaborating with AI systems to generate music. The complexity of AI-driven output and the lack of control over creative decisions can lead to feelings of overwhelm and disempowerment. This study addresses this issue by introducing a suite of AI-steering tools, including Voice Lanes, Example-Based Sliders, Semantic Sliders, and Multiple Alternatives, designed to enhance novice composers' understanding and control over AI-generated music. A mixed-methods study involving 21 novice music composers evaluated the effectiveness of these tools in a real-world setting. Results show that the AI-steering tools significantly increased users' trust, control, comprehension, sense of collaboration, self-efficacy, and ownership of the composition. These findings have significant implications for future human-AI co-creation interfaces, highlighting the importance of tool-mediated collaboration in fostering creative empowerment and agency. The COCOCO music tool, which stands for 'collaborative co-creation', provides a novel approach to democratizing music composition and offers promising insights for the development of more user-centered AI-assisted creative tools. This research contributes to our understanding of the role of AI in creative processes and provides a foundation for designing more effective human-AI collaboration interfaces in various creative domains.",
//     sentences: [
//       "In this work1, we investigate how novices co-create music with a deep generative model, and what types of interactive controls are important for an effective co-creation experience. Through a needfinding study, we found that generative AI can overwhelm novices when the AI generates too much content, and can make it hard to express creative goals when outputs appear to be random. To better match co-creation needs, we built Cococo, a music editor web interface that adds interactive capabilities via a set of AI- steering tools. These tools restrict content generation to particular voices and time measures, and help to constrain non-deterministic output to specific high-level directions. We found that the tools helped users increase their control, self-efficacy, and creative ownership, and we describe how the tools affected novices’ strategies for composing and managing their interaction with AI.",
//       "That is a very happy person",
//       "Today is a sunny day",
//     ],
//   },
// };

// // Query the API and log the response
// query(data).then((response) => {
//   console.log(JSON.stringify(response));
// });


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