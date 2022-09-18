import { defineConfig } from 'astro/config';
import fastify from '@matthewp/astro-fastify';


// https://astro.build/config
export default defineConfig({
  output: 'server',
	adapter: fastify({}),
});
