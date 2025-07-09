import { FastifyReply, FastifyRequest } from 'fastify';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://rest.coincap.io/v3';
const API_KEY = process.env.COINCAP_API_KEY;

function withApiKey(url: string) {
    if (API_KEY) {
        return url + (url.includes('?') ? '&' : '?') + `apiKey=${API_KEY}`;
    }
    return url;
}

// Types for params
interface CoinIdParams {
    id: string;
}

// CoinCap v3 asset type
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

// CoinCap v3 history point type
export interface AssetHistoryPoint {
    priceUsd: string;
    time: number;
    date: string;
}

// API response wrappers
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

export async function fetchAllCoins(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const url = withApiKey(`${BASE_URL}/assets`);
        const response = await fetch(url);
        const data = await response.json() as unknown as AssetListResponse;
        console.log('CoinCap data:', data)
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        console.error('Error fetching coins:', err);
        reply.status(500).send({ error: 'Failed to fetch data from CoinCap' });
    }
}

export async function fetchCoinById(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const url = withApiKey(`${BASE_URL}/assets/${id}`);
        const response = await fetch(url);
        const data = await response.json() as unknown as AssetResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch coin details from CoinCap' });
    }
}

export async function fetchHourlyHistory(
    req: FastifyRequest<{ Params: CoinIdParams }>,
    reply: FastifyReply
) {
    try {
        const { id } = req.params;
        const now = Date.now();
        const oneDayAgo = now - 24 * 60 * 60 * 1000;
        const url = withApiKey(`${BASE_URL}/assets/${id}/history?interval=h1&start=${oneDayAgo}&end=${now}`);
        const response = await fetch(url);
        const data = await response.json() as unknown as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch hourly history from CoinCap' });
    }
}

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
        const data = await response.json() as unknown as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 7d history from CoinCap' });
    }
}

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
        const data = await response.json() as unknown as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 30d history from CoinCap' });
    }
}

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
        const data = await response.json() as unknown as AssetHistoryResponse;
        reply.header('Access-Control-Allow-Origin', '*').send(data.data);
    } catch (err) {
        reply.status(500).send({ error: 'Failed to fetch 1y history from CoinCap' });
    }
}
