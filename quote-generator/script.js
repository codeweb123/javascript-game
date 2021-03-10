const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];
//local quotes
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
// Fetch request using Async function
// Get Quotes from API
async function getQuotes() {
     const apiURL = 'https://type.fit/api/quotes';
     try {
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
         newQuote();
     } catch (error) {
         //catch error here
     }
 }
// on Load
getQuotes();