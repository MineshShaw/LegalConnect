const API_KEY = "704f089032214b16ab56c6f753b33b71";
const BASE_URL = "https://newsapi.org/v2/everything";

const FILTER_TOPICS = ["tax", "chartered accountant", "financial update", "corporate law", "legal news", "business law"];

export const fetchFilteredNews = async (searchQuery = "", page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${searchQuery || FILTER_TOPICS.join(" OR ")}&language=en&page=${page}&pageSize=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
