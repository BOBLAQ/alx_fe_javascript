let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "Stay hungry, stay foolish.", category: "Motivation" },
  { text: "Talk is cheap. Show me the code.", category: "Coding" }
];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function showRandomQuote() {
  const display = document.getElementById("quoteDisplay");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  display.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

function addQuote() {
  const text = document.getElementById("newQuoteText").value;
  const category = document.getElementById("newQuoteCategory").value;

  if (text && category) {
    quotes.push({ text, category });
    saveQuotes();
    alert("Quote added!");
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    populateCategories(); // update dropdown if new category is added
  }
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);
