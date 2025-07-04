export async function fetchStockData() {
    try {
        // Примерен endpoint
        const response = await fetch("https://mock-stock-api.example.com/top");
        if (!response.ok) {
            throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
