// cryptoApi.ts: API utility functions for fetching cryptocurrency data from backend
// Each function returns data from the CoinScope backend, with error handling
const BASE_URL = "https://coinscope-nzhp.onrender.com/coinscope"; // Change to production address for deployment

// Fetch all coins data
export async function fetchCryptoData() {
    const res = await fetch(`${BASE_URL}/all`);
    if (!res.ok) throw new Error("Failed to fetch coins");
    return await res.json(); // Returns array of coin objects
}

// Fetch details for a single coin by ID
export async function fetchCryptoById(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch coin details");
    return await res.json(); // Returns coin object
}

// Fetch historical price data for a coin by ID and period
export async function fetchCryptoHistory(id: string, period: "1d" | "7d" | "30d" | "1y") {
    let endpoint = "";
    // Select endpoint based on requested period
    if (period === "1d") endpoint = "history/hourly";
    if (period === "7d") endpoint = "history/7d";
    if (period === "30d") endpoint = "history/30d";
    if (period === "1y") endpoint = "history/1y";
    const res = await fetch(`${BASE_URL}/${id}/${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch history");
    return await res.json(); // Returns array of { priceUsd, time, ... }
}