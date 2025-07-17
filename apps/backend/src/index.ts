// Entry point for the Fastify backend server
import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import coinscopeRoutes from './routes/coinscope.routes';
// import authRoutes from './routes/auth.routes'; // Uncomment to enable authentication routes

dotenv.config(); // Load environment variables from .env file

const fastify = Fastify({ logger: true }); // Create Fastify instance with logging

// Register CORS to allow cross-origin requests
fastify.register(cors, { origin: true, credentials: true });

// Register main API routes for coinscope
fastify.register(coinscopeRoutes, { prefix: '/coinscope' });
// fastify.register(authRoutes, { prefix: '/auth' }); // Uncomment to enable auth

// Health check route
fastify.get('/', async (req, reply) => {
  return { message: 'Fastify API Server is running' };
});

const PORT = process.env.PORT || 5000;
// Start the server and listen on the specified port
fastify.listen({ port: Number(PORT), host: '0.0.0.0' }, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    console.log(`http://localhost:5000`)
  }
});
