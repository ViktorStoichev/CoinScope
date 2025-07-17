import { FastifyReply, FastifyRequest } from 'fastify';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const BASE_URL = 'https://rest.coincap.io/v3'; // CoinCap API base URL
const API_KEY = process.env.COINCAP_API_KEY; // CoinCap API key from .env

/**
 * Helper function to append the API key to CoinCap requests if available.
 * Ensures all requests are authenticated if an API key is set.
 */
function withApiKey(url: string) {
    if (API_KEY) {
        return url + (url.includes('?') ? '&' : '?') + `apiKey=${API_KEY}`;
    }
    return url;
}

// Types for request params
interface CoinIdParams {
    id: string;
}

// CoinCap asset type definition
export interface Asset {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string | null;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string | null;
    explorer: string | null;
}

// CoinCap history point type definition
export interface AssetHistoryPoint {
    priceUsd: string;
    time: number;
    date: string;
}

// API response wrappers for type safety
interface AssetListResponse {
    data: Asset[];
    timestamp: number;
}

interface AssetResponse {
    data: Asset;
    timestamp: number;
}

interface AssetHistoryResponse {
    data: AssetHistoryPoint[];
    timestamp: number;
}

/**
 * Fetches all coins from CoinCap API.
 * Makes a GET request to /assets and returns the list of coins.
 * Handles errors and sends a 500 response if CoinCap is unreachable.
 */
export async function fetchAllCoins(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const url = withApiKey(`${BASE_URL}/assets`);
        const response = await fetch(url);
        const data = await response.json() as AssetListResponse;
        // Log the data for debugging
        console.log('CoinCap data:', data)
        // Send only the coin list, not the timestamp
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        console.error('Error fetching coins:', err);
        reply.status(500).send({ error: 'Failed to fetch data from CoinCap' });
    }
}

/**
 * Fetches details for a single coin by its ID.
 * Makes a GET request to /assets/:id and returns coin details.
 * Handles errors and sends a 500 response if CoinCap is unreachable.
 */
export async function fetchCoinById(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const url = withApiKey(`${BASE_URL}/assets/${id}`);
        const response = await fetch(url);
        const data = await response.json() as AssetResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch coin details from CoinCap' });
    }
}

/**
 * Fetches hourly price history for the last 24 hours for a coin.
 * Calculates the time range, builds the API URL, and returns the history array.
 * Handles errors and sends a 500 response if CoinCap is unreachable.
 */
export async function fetchHourlyHistory(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        // Calculate timestamps for last 24 hours
        const now = Date.now();
        const oneDayAgo = now - 24 * 60 * 60 * 1000;
        // CoinCap expects start/end in ms
        const url = withApiKey(`${BASE_URL}/assets/${id}/history?interval=h1&start=${oneDayAgo}&end=${now}`);
        const response = await fetch(url);
        const data = await response.json() as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch hourly history from CoinCap' });
    }
}

/**
 * Fetches daily price history for the last 7 days for a coin.
 * Calculates the time range, builds the API URL, and returns the history array.
 */
export async function fetch7dHistory(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const now = Date.now();
        const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
        const url = withApiKey(`${BASE_URL}/assets/${id}/history?interval=d1&start=${sevenDaysAgo}&end=${now}`);
        const response = await fetch(url);
        const data = await response.json() as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 7d history from CoinCap' });
    }
}

/**
 * Fetches daily price history for the last 30 days for a coin.
 * Calculates the time range, builds the API url, and returns the history array.
 */
export async function fetch30dHistory(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const now = Date.now();
        const thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000;
        const url = withApiKey(`${BASE_URL}/assets/${id}/history?interval=d1&start=${thirtyDaysAgo}&end=${now}`);
        const response = await fetch(url);
        const data = await response.json() as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 30d history from CoinCap' });
    }
}

/**
 * Fetches daily price history for the last year for a coin.
 * Calculates the time range, builds the API URL, and returns the history array.
 * Note: This can return a large dataset, so use it for charting or analytics.
 */
export async function fetch1yHistory(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const now = Date.now();
        const oneYearAgo = now - 365 * 24 * 60 * 60 * 1000;
        const url = withApiKey(`${BASE_URL}/assets/${id}/history?interval=d1&start=${oneYearAgo}&end=${now}`);
        const response = await fetch(url);
        const data = await response.json() as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 1y history from CoinCap' });
    }
}
