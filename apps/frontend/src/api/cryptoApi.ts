const BASE_URL = "http://localhost:5000/coinscope"; // смени с реалния адрес

export async function fetchCryptoData() {
    const res = await fetch(`${BASE_URL}/all`);
    if (!res.ok) throw new Error("Failed to fetch coins");
    return await res.json();
}

export async function fetchCryptoById(id: string) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch coin details");
    return await res.json();
}

export async function fetchCryptoHistory(id: string, period: "1d" | "7d" | "30d" | "1y") {
    let endpoint = "";
    if (period === "1d") endpoint = "history/hourly";
    if (period === "7d") endpoint = "history/7d";
    if (period === "30d") endpoint = "history/30d";
    if (period === "1y") endpoint = "history/1y";
    const res = await fetch(`${BASE_URL}/${id}/${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch history");
    return await res.json(); // масив от { priceUsd, time, ... }
}