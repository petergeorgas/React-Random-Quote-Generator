export default async function getRandomQuote() {
    const url = "https://api.quotable.io/random" // Quotable API endpoint
    const resp = await fetch(url) // Grab the response 
    const data = await resp.json(); // Get the JSON data
    return data // 
}