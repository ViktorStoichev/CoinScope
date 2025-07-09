import { FastifyInstance } from 'fastify';
import * as controller from '../controllers/coinscope.controller';

export default async function (fastify: FastifyInstance) {
  fastify.get('/all', controller.fetchAllCoins);
  fastify.get('/:id', controller.fetchCoinById);
  fastify.get('/:id/history/hourly', controller.fetchHourlyHistory);
  fastify.get('/:id/history/7d', controller.fetch7dHistory);
  fastify.get('/:id/history/30d', controller.fetch30dHistory);
  fastify.get('/:id/history/1y', controller.fetch1yHistory);
}
