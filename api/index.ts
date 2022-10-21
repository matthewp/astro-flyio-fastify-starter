import type { DefineFastifyRoutes } from '@matthewp/astro-fastify';

const defineRoutes: DefineFastifyRoutes = (fastify) => {
  // Here you have the fastify object and can do whatever you need, such as
  // adding routes or plugins.

  fastify.get('/hello', function (request, reply) {
    reply.send({ hello: 'world' });
  });
};

export default defineRoutes;