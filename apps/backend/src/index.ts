import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import fastifyPostgres from '@fastify/postgres';
import fastifyCookie from '@fastify/cookie';
import coinscopeRoutes from './routes/coinscope.routes';
// import authRoutes from './routes/auth.routes';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: true, credentials: true });
fastify.register(fastifyCookie);
fastify.register(fastifyPostgres, {
  connectionString: process.env.DATABASE_URL, // e.g. postgres://user:pass@localhost:5432/db
});

fastify.register(coinscopeRoutes, { prefix: '/coinscope' });
// fastify.register(authRoutes, { prefix: '/auth' });

fastify.get('/', async (req, reply) => {
  return { message: 'Fastify API Server is running' };
});

const PORT = process.env.PORT || 5000;
fastify.listen({ port: Number(PORT), host: '0.0.0.0' }, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    console.log(`http://localhost:5000`)
  }
});
