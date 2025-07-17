// Defines API routes for CoinScope endpoints
import { FastifyInstance } from 'fastify';
import * as controller from '../controllers/coinscope.controller';

export default async function (fastify: FastifyInstance) {
  // Get all coins
  fastify.get('/all', controller.fetchAllCoins);
  // Get details for a specific coin
  fastify.get('/:id', controller.fetchCoinById);
  // Get hourly price history for a coin
  fastify.get('/:id/history/hourly', controller.fetchHourlyHistory);
  // Get 7-day price history for a coin
  fastify.get('/:id/history/7d', controller.fetch7dHistory);
  // Get 30-day price history for a coin
  fastify.get('/:id/history/30d', controller.fetch30dHistory);
  // Get 1-year price history for a coin
  fastify.get('/:id/history/1y', controller.fetch1yHistory);
}
